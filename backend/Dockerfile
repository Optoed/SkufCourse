FROM python:3.12.1

WORKDIR /code
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY app app

COPY alembic alembic
COPY alembic.ini .

CMD ["/bin/bash", "-c", "alembic upgrade head && uvicorn app.main:app"]