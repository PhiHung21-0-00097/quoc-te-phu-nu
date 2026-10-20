
"use client";

import { useState } from "react";

const family = [
  {
    name: "Bà Ngoại Xinh Đẹp",
    icon: "🌷",
    color: "from-rose-300 to-amber-200",
    wish: "Kính chúc Bà Ngoại yêu quý luôn mạnh khỏe, sống vui vẻ, an nhiên và luôn nở nụ cười thật tươi. Mong mỗi ngày của Bà đều ngập tràn yêu thương, bình an và hạnh phúc. Gia đình mình thương Bà thật nhiều!",
  },
  {
    name: "Mẹ Yên",
    icon: "🌹",
    color: "from-pink-300 to-rose-200",
    wish: "Chúc Mẹ Yên luôn xinh đẹp, trẻ trung, mạnh khỏe và gặp thật nhiều may mắn. Mong mọi điều tốt đẹp nhất sẽ đến với Mẹ, để ngày nào Mẹ cũng vui cười và cảm nhận được tình yêu thương của gia đình.",
  },
  {
    name: "Mẹ Bằng",
    icon: "🌺",
    color: "from-orange-200 to-pink-300",
    wish: "Chúc Mẹ Bằng luôn rạng rỡ, bình an, hạnh phúc và thành công trong mọi điều Mẹ làm. Mong Mẹ luôn giữ được sự dịu dàng, tươi trẻ và có thật nhiều khoảnh khắc đáng nhớ bên những người thân yêu.",
  },
  {
    name: "Mợ Nhung",
    icon: "🌸",
    color: "from-fuchsia-300 to-pink-200",
    wish: "Chúc Mợ Nhung ngày càng xinh đẹp, duyên dáng, luôn vui vẻ và gặp toàn chuyện may mắn. Mong nụ cười của Mợ lúc nào cũng rạng rỡ như những đóa hoa, gia đình ấm êm và cuộc sống ngọt ngào.",
  },
  {
    name: "Chị 2",
    icon: "💐",
    color: "from-violet-300 to-pink-200",
    wish: "Chúc Chị 2 luôn xinh đẹp, tự tin, rực rỡ và thành công trên con đường mình chọn. Mong chị luôn được yêu thương, gặp đúng người, đúng cơ hội và mỗi ngày đều có thêm một lý do để hạnh phúc.",
  },
  {
    name: "Chị 3",
    icon: "🌻",
    color: "from-yellow-200 to-rose-200",
    wish: "Chúc Chị 3 luôn tươi tắn như ánh nắng ban mai, mạnh khỏe, vui vẻ và gặp nhiều điều tốt lành. Chúc mọi dự định của chị đều thuận lợi, cuộc sống luôn có tiếng cười và tình yêu thương ở bên.",
  },
  {
    name: "Chị 5",
    icon: "🪷",
    color: "from-pink-300 to-purple-200",
    wish: "Chúc Chị 5 luôn xinh xắn, bình an, hạnh phúc và ngày càng thành công. Mong chị có thật nhiều niềm vui, luôn được trân trọng, yêu thương và giữ mãi nguồn năng lượng tích cực của mình.",
  },
  {
    name: "Bé Khải Hân",
    icon: "🦋",
    color: "from-sky-200 to-pink-200",
    wish: "Chúc Khải Hân bé bỏng luôn ngoan ngoãn, đáng yêu, khỏe mạnh và học tập thật tốt. Luôn thành công trên con đường mik trọn",
  },
  {
    name: "Bé Bảo Trâm",
    icon: "🎀",
    color: "from-pink-200 to-violet-200",
    wish: "Chúc Bảo Trâm luôn là cô bé đáng yêu, hay cười, khỏe mạnh và chăm ngoan. Học hành chăm chỉ, thành công trên con đường học vấn nhé",
  },
];

const petals = Array.from({ length: 24 }, (_, i) => ({
  left: `${(i * 37 + 7) % 100}%`,
  delay: `${-((i * 7) % 18)}s`,
  duration: `${12 + ((i * 3) % 10)}s`,
  size: `${10 + ((i * 5) % 13)}px`,
}));

export default function Home() {
  const [opened, setOpened]:any = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [sparkle, setSparkle] = useState(false);

  function celebrate() {
    setSparkle(true);
    setShowAll(true);
    window.setTimeout(() => setSparkle(false), 1600);
    document.getElementById("family")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#08091c] text-white">
      {/* Ánh sáng nền */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="orb orb-three" />

        {petals.map((p, i) => (
          <span
            key={i}
            className="falling-petal"
            style={{
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.duration,
              width: p.size,
              height: `calc(${p.size} * 1.25)`,
            }}
          >
            {i % 3 === 0 ? "🌸" : i % 3 === 1 ? "✿" : "❀"}
          </span>
        ))}
      </div>

      {/* Nội dung */}
      <div className="relative z-10">
        <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <a href="#" className="flex items-center gap-2 text-sm font-semibold tracking-wide">
            <span className="text-2xl">🌷</span>
            <span className="bg-gradient-to-r from-pink-200 to-amber-200 bg-clip-text text-transparent">
              OUR LOVELY FAMILY
            </span>
          </a>
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-pink-100">
            With love ♡
          </span>
        </header>

        {/* Hero */}
        <section className="flex min-h-[82svh] flex-col items-center justify-center px-5 pb-16 pt-8 text-center">
          <div className="mb-6 animate-float text-6xl sm:text-8xl">
            💐
          </div>

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-amber-200 sm:text-sm">
            A little garden of love
          </p>

          <h1 className="hero-title max-w-4xl text-4xl font-black leading-tight sm:text-6xl md:text-7xl">
            Ngàn Hoa
            <br />
            <span className="gold-text">Gửi Yêu Thương</span>
          </h1>

          <div className="my-6 flex items-center gap-3 text-amber-200/80">
            <span>✦</span>
            <span className="h-px w-12 bg-gradient-to-r from-transparent via-amber-200 to-transparent sm:w-24" />
            <span className="text-2xl">🌸</span>
            <span className="h-px w-12 bg-gradient-to-r from-transparent via-amber-200 to-transparent sm:w-24" />
            <span>✦</span>
          </div>

          <h2 className="text-xl font-bold text-pink-100 sm:text-3xl">
            Chúc Mừng Ngày 20 Tháng 11
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
            Gửi những người phụ nữ tuyệt vời và những thiên thần nhỏ
            của gia đình mình. Mong mọi người luôn bình an, rạng rỡ
            như hoa và hạnh phúc trong từng khoảnh khắc.
          </p>

          <button
            onClick={celebrate}
            className="glow-button mt-9 rounded-full px-3 py-4 text-md font-bold text-[#201126] transition duration-300 hover:scale-105 active:scale-95 sm:text-base"
          >
            Bấm dô đây nè mấy chế tui ơi ✨
          </button>

          <p className="mt-5 text-xs text-slate-400">
            Cuộn xuống để nhận những lời chúc riêng 💌
          </p>

          <a href="#family" className="mt-6 animate-bounce text-2xl text-pink-200">
            ↓
          </a>
        </section>

        {/* Lời nhắn */}
        <section className="mx-auto max-w-4xl px-5 py-14 text-center">
          <span className="text-4xl">💖</span>
          <h2 className="mt-4 text-2xl font-bold sm:text-4xl">
            Gửi Những Bông Hoa Của Gia Đình
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Mỗi người là một bông hoa mang vẻ đẹp riêng.
            Cảm ơn vì đã làm cho gia đình trở thành nơi có thật nhiều
            yêu thương, tiếng cười và những kỷ niệm quý giá.
          </p>
        </section>

        {/* Cards */}
        <section id="family" className="mx-auto max-w-6xl scroll-mt-6 px-4 py-12 sm:px-6">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-pink-200">
              Special wishes
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Dành Riêng Cho Bạn
            </h2>
            <p className="mt-3 text-sm text-slate-400">
              Chạm vào từng tấm thiệp để mở lời chúc nhé!
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {family.map((person:any, i) => (
              <button
                key={person.name}
                onClick={() => setOpened(person)}
                className={`wish-card group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${person.color} p-[1px] text-left transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:rounded-3xl`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative flex h-full min-h-[170px] flex-col items-center justify-center overflow-hidden rounded-[15px] bg-[#15132a]/95 px-2 py-6 text-center sm:min-h-[220px] sm:rounded-[23px] sm:px-5">
                  <div className="absolute -right-7 -top-7 h-20 w-20 rounded-full bg-pink-400/10 blur-2xl transition group-hover:bg-pink-300/30" />
                  <span className="flower-icon text-4xl sm:text-5xl">
                    {person.icon}
                  </span>
                  <h3 className="mt-4 text-sm font-bold text-white sm:text-lg">
                    {person.name}
                  </h3>
                  <span className="mt-3 rounded-full border border-pink-200/20 bg-white/5 px-3 py-1.5 text-[10px] text-pink-100 sm:text-xs">
                    Nhận lời chúc ♡
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="rounded-full border border-pink-200/40 px-6 py-3 text-sm font-semibold text-pink-100 transition hover:bg-pink-200/10"
            >
              {showAll ? "Thu gọn lời chúc ↑" : "Gửi lời chúc đến tất cả 💝"}
            </button>
          </div>

          {showAll && (
            <div className="mt-8 space-y-4">
              {family.map((person) => (
                <article
                  key={person.name}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6"
                >
                  <h3 className="font-bold text-pink-200">
                    {person.icon} {person.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {person.wish}
                  </p>
                  <button
                    onClick={() => {
                      navigator.clipboard?.writeText(
                        `${person.name} 💖\n${person.wish}`
                      );
                    }}
                    className="mt-3 text-xs text-amber-200 underline underline-offset-4"
                  >
                    Sao chép lời chúc
                  </button>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Kết thúc */}
        <section className="relative mx-auto max-w-4xl px-5 py-24 text-center">
          <div className="absolute inset-x-10 top-1/2 h-32 -translate-y-1/2 rounded-full bg-pink-500/10 blur-3xl" />
          <div className="relative">
            <div className="mb-5 text-5xl">🌹 ✨ 🌹</div>
            <h2 className="gold-text text-3xl font-black leading-relaxed sm:text-5xl">
              Yêu Thương Luôn Đong Đầy
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Chúc những người thân yêu của con luôn khỏe mạnh,
              bình an và hạnh phúc. Mong gia đình mình mãi là nơi
              có những vòng tay ấm áp và nụ cười không bao giờ tắt.
            </p>
            <p className="mt-8 text-lg font-semibold text-pink-200">
              Mãi yêu gia đình mình ♡
            </p>
          </div>
        </section>

        <footer className="border-t border-white/10 px-5 py-7 text-center text-xs text-slate-500">
          Made with 💖 for our lovely family · 20/11
        </footer>
      </div>

      {/* Thiệp lời chúc */}
      { opened && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#050512]/80 p-4 backdrop-blur-md"
          onClick={() => setOpened(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Lời chúc dành cho ${opened?.name}`}
            className={`wish-modal relative my-auto w-full max-w-md rounded-[28px] border border-pink-200/30 bg-gradient-to-br ${opened?.color} p-[1px] shadow-2xl`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative overflow-hidden rounded-[27px] bg-[#111026] px-6 py-9 text-center sm:px-9">
              <button
                onClick={() => setOpened(null)}
                aria-label="Đóng thiệp"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xl text-slate-300 hover:bg-white/10"
              >
                ×
              </button>

              <div className="mb-4 text-6xl">{opened?.icon}</div>
              <p className="text-xs uppercase tracking-[0.25em] text-amber-200">
                A wish from my heart
              </p>
              <h2 className="mt-4 text-2xl font-black text-pink-100 sm:text-3xl">
                Gửi {opened?.name}
              </h2>
              <div className="my-5 text-amber-200">✧ ─── ♡ ─── ✧</div>
              <p className="text-sm leading-8 text-slate-200 sm:text-base">
                {opened?.wish}
              </p>
              <p className="mt-6 text-lg text-pink-200">
                Thương thật nhiều! 💗
              </p>

              <button
                onClick={() => setOpened(null)}
                className="glow-button mt-7 rounded-full px-7 py-3 font-bold text-[#201126]"
              >
                Nhận yêu thương 🌷
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Pháo sáng khi mở vườn hoa */}
      {sparkle && (
        <div className="pointer-events-none fixed inset-0 z-[60] flex items-center justify-center">
          <div className="celebrate-text text-center text-5xl sm:text-7xl">
            ✨💖🌸
          </div>
        </div>
      )}
    </main>
  );
}
