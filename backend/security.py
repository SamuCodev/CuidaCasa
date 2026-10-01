# CryptContext es una herramienta de passlib especializada en contraseñas
# Esta genera un algoritmo de cifrado como bcrypt y da metodos para hashear(cifrar) y verificar(comparar)
from passlib.context import CryptContext
import os
from dotenv import load_dotenv
from datetime import datetime, timedelta
from jose import jwt

load_dotenv()
SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

# En esta linea se denomina a bcrypt como algoritmo de hashing y usa  deprecated="auto" que permite cambiar de algoritmo de hash mas adelante
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto") 

def crear_token(datos: dict) -> str:
    datos_copia = datos.copy()
    expiracion = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    datos_copia["exp"] = expiracion
    token = jwt.encode(datos_copia, SECRET_KEY, algorithm=ALGORITHM)
    return token

# Funcion para cifrar una contraseña mandada por un argumento
def hashear_pwd(password: str) -> str:
    password_hash = pwd_context.hash(password) # Cifra el password con bcrypt
    return password_hash # Devuelve el hash (nunca el password original)

# Funcion para verificar la contraseña con el hash de la contraseña y si es correcto devuelve True o False.
def verificar_password(password: str, password_hash: str) -> bool:
    is_correct = pwd_context.verify(password, password_hash) # Aca se verifica si el password ingresado es igual al hash guardado en postgres
    return is_correct
