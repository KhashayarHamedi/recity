from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Re:City API is running"}
