from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="ReCity API")

# Enable CORS so frontend can call backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can restrict this later to your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Re:City API is running"}

@app.get("/simulate")
def simulate_data():
    # Dummy environmental simulation
    return {
        "location": "Berlin Block A",
        "crowd_level": "High",
        "foot_traffic": 82.3,
        "noise_level_db": 67,
        "air_quality_index": 42
    }
