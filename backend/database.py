from dotenv import load_dotenv
import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

load_dotenv()
database_url = os.getenv("DATABASE_URL")

#Se conecta a postgres usando la URL de .env
engine = create_engine(database_url)

#Cada peticion HTTP abre su propia sesion, la usa y la cierra, nunca se reutilizan sesiones
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

#Es la plantilla comun de todos los modelos de las bases de datos
Base = declarative_base()

#Funcion que creae
def get_db():
    db = SessionLocal() # Crea una sesion de SQLAlchemy para enviar datos a postgres
    try:
        yield db #El yield funciona como una pausa mientras el endpoint corre y luego retoma cuando termina
    finally:
        db.close()