# 📍 GEO-EATS: District 1 Gastronomy Explorer

[![Next.js](https://img.shields.io/badge/Frontend-Next.js%2014-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com/)
[![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-336791?style=for-the-badge&logo=postgresql)](https://www.postgresql.org/)
[![Docker](https://img.shields.io/badge/DevOps-Docker-2496ED?style=for-the-badge&logo=docker)](https://www.docker.com/)

**GEO-EATS** là một ứng dụng Web Fullstack hiện đại, hỗ trợ khám phá hệ sinh thái ẩm thực tại trung tâm Quận 1, TP. Hồ Chí Minh. Dự án kết hợp công nghệ khai thác dữ liệu địa lý thời gian thực và trải nghiệm người dùng tối giản (Luxury Clean) để tối ưu hóa việc tìm kiếm và điều hướng địa điểm.

---

## 🚀 Tính năng nổi bật

- **🛰️ Smart Crawler**: Tự động truy vấn và đồng bộ dữ liệu từ hệ thống vệ tinh **OpenStreetMap (OSM)** thông qua Overpass API. Hệ thống lọc thông minh các loại hình nhà hàng, quán cafe.
- **🗺️ Real-time Navigation**: Tích hợp **Deep Link Google Maps** trực tiếp trên từng thẻ địa điểm, hỗ trợ người dùng kích hoạt chỉ đường tức thì với tọa độ chính xác.
- **💎 Luxury UI/UX**: Giao diện xây dựng trên triết lý tối giản với hệ thống Card bo góc hiện đại, hiệu ứng chuyển cảnh mượt mà và tương thích hoàn toàn với các kích thước màn hình (Responsive).
- **📍 Precision Mapping**: Hiển thị chính xác thông số kỹ thuật địa lý (Kinh độ/Vĩ độ) và quản lý dữ liệu không gian hiệu quả thông qua PostgreSQL.

---

## 🛠 Tech Stack

| Thành phần         | Công nghệ sử dụng                                 |
| ------------------ | ------------------------------------------------- |
| **Frontend**       | Next.js 14 (App Router), Tailwind CSS, TypeScript |
| **Backend**        | FastAPI (Python 3.10+), SQLAlchemy ORM            |
| **Database**       | PostgreSQL (Containerized)                        |
| **Crawler**        | Overpass API (OpenStreetMap Data)                 |
| **Infrastructure** | Docker, Docker Compose, Windows Batch Script      |

---

## 📂 Cấu trúc dự án

````text
GEO-EATS/
├── backend/                # FastAPI Services & Data Logic
│   ├── crawler.py          # Script thu thập dữ liệu từ OSM
│   ├── database.py         # Cấu hình kết nối PostgreSQL
│   └── main.py             # Hệ thống API Endpoints
├── frontend/               # Next.js Application
│   ├── app/                # Giao diện và Logic xử lý trang
│   ├── public/             # Assets (Icons, Images)
│   └── globals.css         # Cấu hình Tailwind CSS
├── docker-compose.yml      # Quản lý dịch vụ Database & Cache
├── run.bat                 # Script tự động hóa khởi chạy hệ thống
└── README.md               # Tài liệu dự án

---

## 📦 Hướng dẫn cài đặt & Khởi chạy

### 1. Yêu cầu hệ thống

- **Docker Desktop**: Đã cài đặt và đang chạy.
- **Node.js**: Phiên bản 18.0 trở lên.
- **Python**: Phiên bản 3.10 trở lên.

### 2. Các bước khởi chạy nhanh

**Bước 1: Cài đặt thư viện Frontend**

```bash
cd frontend
npm install
cd ..
````

**Bước 2: Chạy hệ thống bằng Script tự động**
Mở Terminal tại thư mục gốc và gõ lệnh:

```powershell
./run.bat
```

> **Lưu ý**: Script `run.bat` sẽ thực hiện quy trình tự động: Khởi động Docker ➔ Đợi Database ➔ Crawl dữ liệu mới ➔ Chạy Backend ➔ Chạy Frontend.

---

## 💡 Luồng xử lý dữ liệu

1. **Crawler** thực hiện quét các tọa độ địa lý trong phạm vi Quận 1 từ Overpass API.
2. **SQLAlchemy** xử lý, chuẩn hóa thông tin và lưu trữ bền vững vào **PostgreSQL**.
3. **FastAPI** cung cấp các RESTful API giúp ứng dụng Frontend truy xuất dữ liệu theo thời gian thực.
4. **Next.js** thực hiện Server-side Rendering để hiển thị danh sách địa điểm với khả năng tương tác bản đồ trực tiếp.

---
