from pydantic import BaseModel, EmailStr
from datetime import datetime

# Esta es la informacion que entra al crear la cuenta (incluye password en texto plano sin hash)
class UsuarioCreate(BaseModel):
    correo: EmailStr
    nombre: str
    apellido: str
    rol: str
    password: str

class UsuarioLogin(BaseModel):
    correo: EmailStr
    password: str

# Esta es la informacion que se muestra en la respuesta, se incluye toda la informacion menos la contraseña por seguridad
class UsuarioResponse(BaseModel):
    id: int
    correo: EmailStr
    nombre: str
    apellido: str
    rol: str
    verificado: bool
    fecha_creado: datetime
    model_config = {"from_attributes": True} #Permite que pydantic lea los objetos de SQLAlchemy, no solo diccionarios

class UsuarioToken(BaseModel):
    access_token: str
    token_type: str
