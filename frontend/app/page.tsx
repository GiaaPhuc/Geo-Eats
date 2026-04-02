import Link from "next/link";

export default async function HomePage() {
  const res = await fetch("http://127.0.0.1:8000/api/foods", {
    cache: "no-store",
  });
  if (!res.ok)
    return (
      <div className="p-20 text-center font-black text-red-500">
        BACKEND CHƯA CHẠY
      </div>
    );

  const foods = await res.json();

  return (
    <div className="min-h-screen bg-[#fafafa] p-8 md:p-16">
      <header className="mb-16">
        <h1 className="text-7xl font-black italic tracking-tighter text-slate-900">
          FOODYDSEY
        </h1>
        <p className="text-slate-400 font-bold uppercase tracking-widest mt-2 ml-1 text-[10px]">
          District 1 Explorer
        </p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {foods.map((item: any) => {
          // --- PHẦN QUAN TRỌNG NHẤT ĐỂ MỞ ĐƯỢC MAP ---
          // Ép kiểu dữ liệu về số thực để tránh lỗi chuỗi rỗng
          const lat = item.latitude || 10.7769;
          const lng = item.longitude || 106.7009;

          // Dùng URL chuẩn này để ép trình duyệt/điện thoại mở App Maps
          const mapUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

          return (
            <div
              key={item.id}
              className="bg-white border border-slate-100 rounded-[3rem] p-10 shadow-xl flex flex-col justify-between min-h-[350px]"
            >
              <div>
                <span className="text-[10px] font-black uppercase text-orange-500 bg-orange-50 px-4 py-1 rounded-full">
                  {item.amenity}
                </span>
                <h2 className="text-3xl font-black text-slate-800 mt-6 mb-2 italic tracking-tighter">
                  {item.name}
                </h2>
                <p className="text-slate-400 text-sm italic">
                  📍 {item.address}
                </p>
              </div>

              <div className="flex gap-4 mt-8 pt-8 border-t border-slate-50">
                {/* NÚT MỞ MAP: Kiểm tra kỹ href={mapUrl} */}
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-orange-600 text-white py-4 rounded-2xl font-black text-center text-xs uppercase tracking-widest hover:bg-black transition-all"
                >
                  📍 MỞ BẢN ĐỒ
                </a>

                <Link
                  href={`/food/${item.id}`}
                  className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center font-bold hover:bg-black hover:text-white transition-all"
                >
                  →
                </Link>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
}
