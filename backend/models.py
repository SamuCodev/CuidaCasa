from sqlalchemy import Column, Integer, String, Boolean, DateTime
from database import Base
from sqlalchemy.sql import func

class Usuario(Base):
    __tablename__ = "usuarios"
    id = Column(Integer, primary_key=True)
    correo = Column(String, unique=True, nullable=False)
    nombre = Column(String, nullable=False)
    rol = Column(String, nullable=False)
    password_hash = Column(String, nullable=False)
    verificado = Column(Boolean, nullable=False, default=False)
    fecha_creado = Column(DateTime, nullable=False, server_default=func.now())
    fecha_verificado = Column(DateTime, nullable=True)