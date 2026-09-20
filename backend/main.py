from fastapi import FastAPI, HTTPException,status, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from models import Usuario
from database import get_db
from schemas import UsuarioCreate, UsuarioResponse
from security import hashear_pwd
from sqlalchemy.exc import IntegrityError

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.post("/usuarios", response_model=UsuarioResponse)
def registrar_usuario(usuario: UsuarioCreate, db: Session = Depends(get_db)):
    password_hash = hashear_pwd(usuario.password)

    nuevo_usuario = Usuario(
        correo = usuario.correo,
        nombre = usuario.nombre,
        apellido = usuario.apellido,
        rol = usuario.rol,
        password_hash=password_hash
    )

    db.add(nuevo_usuario)
    try:
        db.commit()
    except IntegrityError:
        db.rollback()
        raise HTTPException(status_code=400, detail="Ese correo ya esta registrado")
    db.refresh(nuevo_usuario)

    return nuevo_usuario