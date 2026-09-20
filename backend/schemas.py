from pydantic import BaseModel, EmailStr
from datetime import datetime

class UsuarioCreate(BaseModel):
    correo: EmailStr
    nombre: str
    apellido: str
    rol: str
    password: str

class UsuarioResponse(BaseModel):
    id: int
    correo: EmailStr
    nombre: str
    apellido: str
    rol: str
    verificado: bool
    fecha_creado: datetime
    model_config = {"from_attributes": True}
