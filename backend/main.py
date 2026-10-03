from fastapi import FastAPI, HTTPException,status, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from models import Usuario
from database import get_db
from schemas import UsuarioCreate, UsuarioResponse, UsuarioLogin, UsuarioToken, TokenResponse
from security import hashear_pwd, verificar_password, crear_token
from sqlalchemy.exc import IntegrityError
import jwt

app = FastAPI() # Se inicializa la App y todos los endpoints van pegados a este objeto

# Con la app inicializada se puede ejecutar con el comando:
# uvicorn main:app --reload

# Ambos (react y fastapi) tienen puertos diferentes, para evitar origenes diferentes y bloqueos existe CORS

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:4173"], #Con este link se puede acceder de manera segura al servidor de desarrollo sin problema, pero si fuera en produccion seria en el dominio real
    allow_credentials=True, # Permite enviar cookies y tokens de autenticacion
    allow_methods=["*"], # Permite metodos HTTP como GET, POST, PUT, etc.
    allow_headers=["*"] # Permite cualquier tipo de de header como Content-type, Authorization, etc.
)

# Primer endpoint de la app
@app.post("/usuarios", response_model=UsuarioResponse) #Devuelve siempre un usuarioResponse con sus datos validados por Pydantic

# ==== PARAMETROS ====
# usuario: Pydantic toma como molde el UsuarioCreate para determinar que campos deben estar llenos y que son necesarios para la BD
# db: Depends le dice a la funcion get_db() que se ejecute cada que la funcion se llame para crear una nueva sesion para la conexion con Postgres y si falla cierra automaticamente
def registrar_usuario(usuario: UsuarioCreate, db: Session = Depends(get_db)):
    # Toma la contraseña que ingreso el usuario en texto plano, llama a la funcion hashear_pwd() para finalmente cifrarlo
    password_hash = hashear_pwd(usuario.password)

    # Se crea un nuevo usuario con el modelo de Usuario de Models.py, donde aplicaremos todos estos datos, y finalmente la contraseña hasheada
    nuevo_usuario = Usuario(
        correo = usuario.correo,
        nombre = usuario.nombre,
        apellido = usuario.apellido,
        rol = usuario.rol,
        password_hash=password_hash
    )

    # Este bloque de codigo lo que hace es agregar a la sesion
    db.add(nuevo_usuario)
    try:
        # En este punto lo que hace es intentar guardar capturando duplicados
        db.commit()
    # Si Postgres detecta un error en los datos, devuelve IntegrityError
    except IntegrityError:
        # db.rollback() revierte los cambios por seguridad y lanza un error 400 con un mensaje legible
        db.rollback()
        raise HTTPException(status_code=400, detail="Ese correo ya esta registrado")
    # Finalmente lo que se hace es refrescar la BD y retornar el usuario_nuevo
    db.refresh(nuevo_usuario)
    return nuevo_usuario


@app.post("/auth/login", response_model=TokenResponse)
def login_usuarios(datos: UsuarioLogin, db: Session = Depends(get_db)):
    resultado_query = db.query(Usuario).filter(Usuario.correo == datos.correo).first()
    if resultado_query is None:
        raise HTTPException(status_code=401, detail="Credenciales incorrectas")

    pwd_verificada = verificar_password(datos.password, resultado_query.password_hash)
    if not pwd_verificada:
        raise HTTPException(status_code=401, detail="Credenciales incorrectas")

    payload = {"sub": str(resultado_query.id)}
    token = crear_token(payload)
    return {
        "access_token": token,
        "token_type": "bearer",
        "nombre": resultado_query.nombre,
        "apellido": resultado_query.apellido,
        "correo": resultado_query.correo,
        "rol": resultado_query.rol
        
    }