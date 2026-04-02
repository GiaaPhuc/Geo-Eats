@echo off
title FoOdyssey - Full System Suite
color 0B

echo [1/5] Khoi dong Docker...
docker-compose up -d

echo [2/5] Cho Database (10s)...
timeout /t 10 /nobreak > nul

echo [3/5] Dang quet du lieu moi (CRAWLER)...
cd backend
python crawler.py
cd ..

echo [4/5] Dang chay Backend...
start "BACKEND" cmd /k "cd backend && uvicorn main:app --reload --port 8000"

echo [5/5] Dang chay Frontend...
cd frontend
npm run dev

pause