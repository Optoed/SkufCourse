from sqlalchemy import String, create_engine
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column

import os

DB_LOGIN = os.getenv("DB_LOGIN")
DB_PASSWORD = os.getenv("DB_PASSWORD")
DB_ADDR = os.getenv("DB_ADDR")
DB_NAME = os.getenv("DB_NAME")
CON_STR = f"postgresql://{DB_LOGIN}:{DB_PASSWORD}@{DB_ADDR}/{DB_NAME}"

class Base(DeclarativeBase):
    pass

class User(Base):
    __tablename__ = "user_account"
    id: Mapped[int] = mapped_column(primary_key=True)
    login: Mapped[str] = mapped_column(String(15))
    password: Mapped[str] = mapped_column(String(50))
    fullname: Mapped[str] = mapped_column(String(30))
    
    def __repr__(self) -> str:
        return f"User(id={self.id!r}, login={self.login!r}), fullname={self.fullname!r}"
    
def get_db():
    return create_engine(CON_STR, pool_recycle=3600, echo=True)

get_db().connect()