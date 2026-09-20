from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hashear_pwd(password: str) -> str:
    pwd = password
    password_hash = pwd_context.hash(pwd)
    return password_hash

def verificar_password(password: str, password_hash: str) -> bool:
    is_correct = pwd_context.verify(password, password_hash)
    return is_correct
