from fastapi import APIRouter, Response, status
from pydantic import BaseModel

class UserLogin(BaseModel):
    username: str
    password: str

class UserRegister(BaseModel):
    full_name: str
    username: str
    password: str

router = APIRouter(tags=['user'])

@router.post("/user/login")
def user_login(usr_log: UserLogin):
    # TODO: токен должны записать на фронте в Cookie
    return { 'full_name': 'Чекушкин Скуфф Петрович', 'role': 'prepod', "message": "Вы авторизовались!" }

@router.post("/user/register")
def user_register(usr_reg: UserRegister, response: Response):
    # TODO: работа с бд, регистрация
    response.status_code = 201
    return { 'message': 'Пользователь успешно зарегистрирован!' }