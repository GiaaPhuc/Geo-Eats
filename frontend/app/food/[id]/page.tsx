import Link from "next/link";

export default async function FoodDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(`http://127.0.0.1:8000/api/foods/${params.id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white p-10">
        <div className="text-center">
          <h1 className="text-9xl font-black text-slate-100">500</h1>
          <p className="text-red-500 font-bold uppercase tracking-widest -mt-10">
            Kết nối Backend thất bại
          </p>
          <Link
            href="/"
            className="mt-8 inline-block px-10 py-4 bg-black text-white rounded-2xl font-black"
          >
            QUAY LẠI
          </Link>
        </div>
      </div>
    );
  }

  const result = await res.json();
  const food = result.data;
  const related = result.related || [];

  // FIX LỖI TRIỆT ĐỂ TẠI ĐÂY: Ép kiểu dữ liệu để không bị lỗi Render
  const lat = food?.latitude ?? 10.7769;
  const lng = food?.longitude ?? 106.7009;

  // Nối chuỗi URL an toàn
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

  return (
    <div className="min-h-screen bg-[#fafafa] pb-24 font-sans text-slate-900">
      <nav className="p-8 max-w-7xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-3xl font-black text-orange-600 italic tracking-tighter"
        >
          FOODYDSEY
        </Link>
        <Link
          href="/"
          className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold hover:bg-black hover:text-white transition"
        >
          ×
        </Link>
      </nav>

      <main className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* CHI TIẾT ĐỊA ĐIỂM */}
        <div className="lg:col-span-8 space-y-10">
          <div className="bg-white p-12 rounded-[4rem] shadow-2xl shadow-slate-100 border border-white">
            <span className="px-5 py-2 bg-orange-600 text-white text-[10px] font-black uppercase rounded-full shadow-lg shadow-orange-100">
              {food.amenity || "FOOD & DRINK"}
            </span>
            <h1 className="text-7xl md:text-8xl font-black text-slate-900 leading-none mt-8 mb-10 italic tracking-tighter">
              {food.name}
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 italic border-l-8 border-orange-600 pl-8 py-2">
              📍 {food.address || "Địa chỉ đang cập nhật"}
            </p>
          </div>

          {/* BOX GOOGLE MAPS - PHẢI HIỆN NÚT NÀY */}
          <div className="bg-slate-900 rounded-[4rem] p-16 md:p-24 text-center shadow-2xl relative overflow-hidden group">
            <div className="relative z-10">
              <h2 className="text-white text-4xl md:text-5xl font-black mb-12 tracking-tighter italic">
                Tìm đường đi đến quán?
              </h2>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-orange-500 text-white px-16 py-7 rounded-[2rem] font-black text-2xl hover:bg-white hover:text-black transition-all transform hover:scale-110 shadow-[0_20px_50px_rgba(249,115,22,0.3)]"
              >
                📍 MỞ GOOGLE MAPS NGAY
              </a>

              <div className="mt-12 flex justify-center gap-8 opacity-30">
                <p className="text-white text-[10px] font-bold uppercase tracking-widest font-mono">
                  LAT: {lat}
                </p>
                <p className="text-white text-[10px] font-bold uppercase tracking-widest font-mono">
                  LNG: {lng}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* GỢI Ý BÊN CẠNH */}
        <div className="lg:col-span-4">
          <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-50 sticky top-10">
            <h3 className="text-xl font-black mb-10 italic border-b pb-6 uppercase tracking-tighter text-slate-400">
              Gợi ý tương tự
            </h3>
            <div className="space-y-10">
              {related.map((r: any) => (
                <Link
                  href={`/food/${r.id}`}
                  key={r.id}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex-shrink-0 flex items-center justify-center text-2xl group-hover:bg-orange-600 transition-all shadow-sm">
                    🍲
                  </div>
                  <div className="overflow-hidden">
                    <p className="font-black text-slate-800 truncate group-hover:text-orange-600 transition-colors text-lg">
                      {r.name}
                    </p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                      {r.amenity}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
