from sqlalchemy import create_engine, Column, Integer, String, Float
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

DATABASE_URL = "postgresql://user:password@localhost:5432/foodyssey"
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class Food(Base):
    __tablename__ = "foods"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    amenity = Column(String)    # Loại hình (cafe, restaurant...)
    address = Column(String)
    price_range = Column(String)
    latitude = Column(Float)
    longitude = Column(Float)

def init_db():
    Base.metadata.create_all(bind=engine)