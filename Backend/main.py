from fastapi import FastAPI
from pydantic import BaseModel
import google.generativeai as genai
from dotenv import load_dotenv
import os
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

load_dotenv()  # Load environment variables from .env file

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))  # Use the API key from the environment variable
model = genai.GenerativeModel("gemini-2.5-flash")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],       # Specifies which domains can access your API
    allow_credentials=True,      # Allows cookies, sessions, and auth headers
    allow_methods=["*"],         # Allows all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],         # Allows all HTTP headers
)

class PromptRequest(BaseModel):
    prompt: str

@app.post("/generate")
def generate_response(request: PromptRequest):
    response = model.generate_content(request.prompt)
    return {
        "response": response.text
    }
