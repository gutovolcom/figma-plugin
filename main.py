from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

latest_data = {}

class KVData(BaseModel):
    temaAula: str
    dataEvento: str
    nomeProfessor: str
    fotoProfessor: str

@app.post("/api/kv-update")
def update_kv(data: KVData):
    global latest_data
    latest_data = data.dict()
    return {"status": "ok"}

@app.get("/api/kv-update")
def get_kv():
    return latest_data
