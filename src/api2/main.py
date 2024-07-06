import uvicorn
import pickle
from pydantic import BaseModel
from fastapi import FastAPI
from fastapi.middleware.core import CORSMiddleware

app = FastAPI()

origins = ["http://localhost.triangolo.com", "https://localhost.tiangolo.com", "http://localhost", "http://localhost:8080", "http://localhost:3000"]

app.add_middleware(CORSMiddleware, allow_origins=origins, allow_credentials=True, allow_methods=['*'], allow_headers=["*"])

model = pickle.load(open("C:/Users/anshv/OneDrive/Desktop/Ansh Personal/Inspired Singapore/WiKnow/wiknow/src/model/white_wine.pkl", 'rb'))
