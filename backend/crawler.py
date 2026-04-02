import requests
from sqlalchemy.orm import Session
from database import SessionLocal, Food, engine, Base

Base.metadata.create_all(bind=engine)

def fetch_osm_data():
    overpass_url = "http://overpass-api.de/api/interpreter"
    # Lấy đa dạng hơn để tránh danh sách trống
    overpass_query = """
    [out:json];
    area["name"="Quận 1"]->.searchArea;
    (
      node["amenity"~"cafe|restaurant|fast_food|bar"](area.searchArea);
    );
    out center;
    """
    try:
        response = requests.get(overpass_url, params={'data': overpass_query}, timeout=30)
        return response.json().get('elements', [])
    except:
        return []

def save_to_db(elements):
    db = SessionLocal()
    for el in elements:
        tags = el.get('tags', {})
        name = tags.get('name')
        if not name: continue

        # KIỂM TRA TRÙNG LẶP
        if db.query(Food).filter(Food.name == name).first(): continue

        # ÉP KIỂU VÀ XỬ LÝ DỮ LIỆU LỖI TẠI ĐÂY
        new_food = Food(
            name = name,
            amenity = tags.get('amenity', 'Food & Drink').capitalize(),
            address = tags.get('addr:full') or tags.get('addr:street') or "Quận 1, TP.HCM",
            # Đảm bảo luôn có tọa độ, nếu thiếu thì lấy tọa độ trung tâm Quận 1
            latitude = float(el.get('lat') or el.get('center', {}).get('lat') or 10.7769),
            longitude = float(el.get('lon') or el.get('center', {}).get('lon') or 106.7009),
            price_range = "30.000đ - 150.000đ"
        )
        db.add(new_food)
    db.commit()
    db.close()

if __name__ == "__main__":
    save_to_db(fetch_osm_data())
    print("✅ Đã cập nhật dữ liệu sạch vào Database!")