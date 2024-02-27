import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from git import NoSuchPathError, Repo
from pathlib import Path

from .routers import course_router, task_router, user_router
#import db

FRONTEND_ADDR = os.getenv("FRONTEND_ADDR")

origins = [
    FRONTEND_ADDR,
]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(user_router.router)
app.include_router(course_router.router)
app.include_router(task_router.router)

def get_repo(path: str) -> Repo:
    try:
        return Repo(path)
    except NoSuchPathError:
        return Repo.init(path, bare=True)

REPO_DIR = "./gitrepos/"
Path(REPO_DIR).mkdir(parents=True, exist_ok=True)

repo = get_repo(REPO_DIR + "testrepo3.git")
