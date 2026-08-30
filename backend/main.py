from fastapi import FastAPI, HTTPException,status
from pydantic import BaseModel
from typing import Optional

class UsuarioCrear(BaseModel):
    nombre: str
    email: str


class Usuario(BaseModel):
    id: int
    nombre: str
    email: str

class UsuarioActualizar(BaseModel):
    nombre: str
    email: str

app = FastAPI()

@app.get("/")
def inicio():
    return {"mensaje": "Hola desde FastAPI"}


usuarios = [
    {
        "id": 1,
        "nombre": "Samuel",
        "email": "samuel@gmail.com"
    },
    {
        "id": 2,
        "nombre": "Emanuel",
        "email": "Emanuel@gmail.com"
    }
]

@app.get("/users", response_model=list[Usuario])
def obtener_todos_los_usuarios(nombre: str | None = None):
    if nombre is None:
        return usuarios
    usuarios_encontrados = []

    for usuario in usuarios:
        if usuario["nombre"] == nombre:
            usuarios_encontrados.append(usuario)

    if not usuarios_encontrados:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="El nombre no existe"
        )

    return usuarios_encontrados

@app.get("/users/{id}", response_model=Usuario)
def obtener_usuario(id:int):
    for usuario in usuarios:
        if usuario["id"] == id:
            return usuario

    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND,
        detail="El Id ingresado no existe"
    )

@app.post("/users",
        response_model=Usuario,
        status_code=status.HTTP_201_CREATED)

def crear_usuario(usuario: UsuarioCrear):
    nuevo_usuario = {
        "id": len(usuarios) + 1,
        "nombre": usuario.nombre,
        "email": usuario.email
    }
    usuarios.append(nuevo_usuario)
    return nuevo_usuario

@app.put("/users/{id}", response_model=Usuario)
def actualizar_usuario(id: int, usuario: UsuarioActualizar):
    for usuario_existente in usuarios:
        if usuario_existente["id"] == id:
            usuario_existente["nombre"] = usuario.nombre
            usuario_existente["email"] = usuario.email
            return usuario_existente

    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND,
        detail="No se pudo encontrar el Usuario"
    )

@app.delete("/users/{id}")
def borrar_usuario(id: int):
    for usuario in usuarios:
        if usuario["id"] == id:
            usuarios.remove(usuario)
            return {"mensaje": "Se borro el usuario correctamente."}

    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND,
        detail="No se pudo encontrar el Usuario"
    )