from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
import database

app = FastAPI()

# Cấu hình CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency
def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/api/foods")
def read_foods(db: Session = Depends(get_db)):
    return db.query(database.Food).all()

@app.get("/api/foods/{food_id}")
def read_food_detail(food_id: int, db: Session = Depends(get_db)):
    food = db.query(database.Food).filter(database.Food.id == food_id).first()
    if not food:
        raise HTTPException(status_code=404, detail="Food not found")
    
    # Lấy thêm các quán liên quan cùng loại
    related = db.query(database.Food).filter(
        database.Food.amenity == food.amenity, 
        database.Food.id != food_id
    ).limit(4).all()

    return {
        "data": food,
        "related": related
    }

if __name__ == "__main__":
    import uvicorn
    database.init_db()
    uvicorn.run(app, host="0.0.0.0", port=8000)