from pathlib import Path
from fastapi import FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel

app = FastAPI(title="ReCity API")

class City(BaseModel):
    name: str
    description: str | None = None

# In-memory storage for demo purposes
cities: list[City] = []

@app.get("/cities", response_model=list[City])
def list_cities():
    return cities

@app.post("/cities", response_model=City, status_code=201)
def add_city(city: City):
    cities.append(city)
    return city

@app.get("/cities/{city_id}", response_model=City)
def get_city(city_id: int):
    if city_id < 0 or city_id >= len(cities):
        raise HTTPException(status_code=404, detail="City not found")
    return cities[city_id]

# Serve built frontend if present
frontend_dir = Path(__file__).resolve().parent.parent / "frontend" / "dist"
if frontend_dir.is_dir():
    app.mount("/static", StaticFiles(directory=frontend_dir), name="static")

    @app.get("/", include_in_schema=False)
    async def serve_index():
        return FileResponse(frontend_dir / "index.html")
else:
    @app.get("/")
    def read_root():
        return {"message": "Welcome to ReCity API"}
