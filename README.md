📍 GEO-EATS - District 1 Gastronomy Explorer

GEO-EATS là một ứng dụng Web Fullstack hỗ trợ khám phá ẩm thực tại Quận 1, TP. Hồ Chí Minh với khả năng tích hợp bản đồ thời gian thực. Hệ thống tự động thu thập dữ liệu từ vệ tinh và cung cấp trải nghiệm điều hướng mượt mà cho người dùng.

🚀 Tính năng chính
Smart Crawler: Tự động quét dữ liệu nhà hàng, quán cafe từ OpenStreetMap (OSM) tại khu vực Quận 1.

Real-time Navigation: Tích hợp nút mở Google Maps trực tiếp trên từng thẻ địa điểm để điều hướng nhanh.

Modern UI/UX: Giao diện tối giản, sang trọng (Luxury Clean) với chế độ hiển thị tối ưu trên nhiều thiết bị.

Bản đồ tương tác: Hiển thị chính xác tọa độ GPS (Kinh độ/Vĩ độ) của từng điểm đến.

🛠 Tech Stack
Frontend: Next.js 14+, Tailwind CSS, TypeScript.

Backend: FastAPI (Python 3.10+), SQLAlchemy.

Database: PostgreSQL (chạy trên Docker).

DevOps: Docker & Docker Compose.

📦 Hướng dẫn cài đặt
1. Yêu cầu hệ thống
Đã cài đặt Docker & Docker Desktop.

Node.js (v18+) và Python (3.10+).

2. Khởi chạy dự án
Dự án đã được tích hợp file run.bat để tự động hóa toàn bộ quy trình. Bạn chỉ cần chạy lệnh sau tại thư mục gốc:

Bash
./run.bat
Lưu ý: Nếu là lần đầu chạy, hãy đảm bảo bạn đã thực hiện npm install trong thư mục frontend để cài đặt các thư viện cần thiết.

📂 Cấu trúc thư mục
/frontend: Chứa mã nguồn giao diện Next.js.

/backend: Chứa API FastAPI và logic Crawler dữ liệu.

docker-compose.yml: Cấu hình các dịch vụ Database và Cache.

Dự án được phát triển với mục đích nghiên cứu công nghệ Web hiện đại và xử lý dữ liệu địa lý.
