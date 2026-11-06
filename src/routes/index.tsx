import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import {
  AlertCircle,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock,
  Copy,
  Flame,
  Gift,
  ShieldCheck,
  Sparkles,
  Users,
  X,
  Zap,
  TrendingDown,
  Ban,
  UserMinus,
  Trash2,
  BadgeCheck,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Khóa K126 — Làm Chủ Tệp Khách Hàng Zalo | Lê Long Marketing × MinZalo" },
      {
        name: "description",
        content:
          "6 buổi thực chiến cùng Lê Long Marketing: xây cộng đồng & làm chủ tệp khách Zalo. Chỉ 399K, tặng 20 ngày MinZalo Pro, hoàn 100% học phí.",
      },
      { property: "og:title", content: "Khóa K126 — Làm Chủ Tệp Khách Hàng Zalo" },
      {
        property: "og:description",
        content: "6 buổi thực chiến, tối đa 30 học viên. 399K, tặng 20 ngày MinZalo Pro.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const TARGET = new Date("2026-11-12T20:00:00+07:00").getTime();
const TAKEN = 23;
const MAX = 30;
const BANK_ACC = "0987654321";

const NAV = [
  ["Nỗi đau", "#pain"],
  ["Giảng viên", "#instructor"],
  ["Lộ trình 6 buổi", "#curriculum"],
  ["Quà tặng", "#bonus"],
  ["Học phí", "#register-form"],
  ["FAQ", "#faq"],
];

function useCountdown() {
  const [left, setLeft] = useState<number | null>(null);
  useEffect(() => {
    const tick = () => setLeft(Math.max(0, TARGET - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  const s = Math.floor((left ?? 0) / 1000);
  const pad = (n: number) => (left === null ? "--" : String(n).padStart(2, "0"));
  return [
    ["Ngày", pad(Math.floor(s / 86400))],
    ["Giờ", pad(Math.floor((s % 86400) / 3600))],
    ["Phút", pad(Math.floor((s % 3600) / 60))],
    ["Giây", pad(s % 60)],
  ];
}

function Section({ id, children, className = "" }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`scroll-mt-28 px-4 py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function Heading({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}

const cta =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-primary transition hover:bg-primary-hover";
const card = "rounded-2xl border border-border bg-card shadow-card transition hover:border-border-strong";

function Index() {
  const time = useCountdown();
  const [modal, setModal] = useState<{ name: string; phone: string } | null>(null);

  return (
    <div className="min-h-screen bg-background bg-grid text-foreground">
      {/* Announcement */}
      <div className="sticky top-0 z-50">
        <div className="bg-primary px-4 py-2 text-center text-xs font-medium text-primary-foreground md:text-sm">
          <Zap className="mr-1 inline h-4 w-4" />
          Khóa K126 cùng LÊ LONG MARKETING khai giảng 20:00 ngày 12/11 — Chỉ 399K & Tặng 20 ngày MinZalo Pro. Chỉ còn{" "}
          <b>{MAX - TAKEN}</b> suất cuối!
        </div>
        <nav className="border-b border-border bg-background/85 backdrop-blur">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
            <a href="#" className="flex items-center gap-2">
              <span className="font-extrabold tracking-tight">LÊ LONG MARKETING</span>
              <span className="hidden rounded-full border border-border bg-secondary px-2 py-0.5 text-[10px] font-semibold text-secondary-foreground sm:inline">
                Powered by MinZalo
              </span>
            </a>
            <div className="hidden gap-6 text-sm text-muted-foreground lg:flex">
              {NAV.map(([l, h]) => (
                <a key={h} href={h} className="transition hover:text-foreground">
                  {l}
                </a>
              ))}
            </div>
            <a href="#register-form" className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary-hover">
              Giữ Chỗ Ngay 399K
            </a>
          </div>
        </nav>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-20 pt-16 md:pt-24">
        <div className="glow pointer-events-none absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold text-primary shadow-card">
            <Sparkles className="h-3.5 w-3.5" /> ĐÀO TẠO THỰC CHIẾN 1 KÈM 1 — TỐI THỨ 3 & THỨ 6 (20:00 - 21:30)
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl">
            Dừng Đốt Tiền Quảng Cáo — Tự Xây Cộng Đồng & Làm Chủ{" "}
            <span className="text-primary">Tệp Khách Hàng Riêng</span> Trên Zalo Với Chi Phí 0 Đồng!
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            6 buổi thực chiến cầm tay chỉ việc cùng chuyên gia <b className="text-foreground">Lê Long Marketing</b>. Tự động hóa quét
            data SĐT, lọc tệp chuẩn ngành, kéo nhóm an toàn chống quét và chuyển đổi đơn hàng liên tục bằng cỗ máy MinZalo.
          </p>

          <div className={`${card} mx-auto mt-10 max-w-xl p-6`}>
            <p className="mb-4 flex items-center justify-center gap-2 text-sm font-semibold text-warning">
              <Clock className="h-4 w-4" /> Khai giảng sau
            </p>
            <div className="grid grid-cols-4 gap-3">
              {time.map(([l, v]) => (
                <div key={l} className="rounded-xl border border-border bg-muted py-3">
                  <div className="text-3xl font-bold tabular-nums tracking-tight">{v}</div>
                  <div className="text-xs text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
            <p className="mt-5 flex items-center justify-center gap-1.5 text-sm">
              <Flame className="h-4 w-4 text-warning" /> Tình trạng đăng ký: <b>{TAKEN}/{MAX} học viên</b>
              <span className="text-muted-foreground">(Chỉ còn {MAX - TAKEN} suất cuối cùng)</span>
            </p>
            <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-muted">
              <div className="bar-urgency h-full animate-pulse rounded-full" style={{ width: `${(TAKEN / MAX) * 100}%` }} />
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#register-form" className={`${cta} flex-col gap-0 px-8`}>
              <span className="flex items-center gap-2">
                ĐĂNG KÝ HỌC NGAY — 399.000đ <ArrowRight className="h-4 w-4" />
              </span>
              <span className="text-xs font-normal opacity-85">(Tặng 20 ngày MinZalo Pro ngay Buổi 1)</span>
            </a>
            <a href="#curriculum" className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-4 font-semibold transition hover:border-border-strong">
              Xem Lộ Trình 6 Buổi <ChevronDown className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-3">
            <div className="flex -space-x-2">
              {["LT", "HN", "MK", "TP", "QA"].map((i) => (
                <span key={i} className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-background bg-secondary text-[11px] font-bold text-secondary-foreground">
                  {i}
                </span>
              ))}
            </div>
            <p className="text-left text-sm text-muted-foreground">
              Hơn <b className="text-foreground">500+</b> chủ shop, marketer & doanh nghiệp đã áp dụng thành công
            </p>
          </div>
        </div>
      </section>

      {/* Pain */}
      <Section id="pain" className="bg-muted/60">
        <Heading eyebrow="Nỗi đau" title="Tại sao tự kéo nhóm Zalo thường thất bại?" />
        <div className="grid gap-5 md:grid-cols-2">
          {[
            [TrendingDown, "Quảng cáo Facebook/TikTok ngày càng đắt", "Chi phí kéo số tăng gấp 3 nhưng tỷ lệ chốt đơn thấp, data khách hàng không giữ lại được."],
            [Ban, "Kéo nhóm Zalo bị quét khóa nick", "Vừa gửi vài chục tin nhắn mời nhóm đã bị Zalo hạn chế tính năng, mất luôn tài khoản kinh doanh chính."],
            [UserMinus, "Kéo vào bao nhiêu, out sạch bấy nhiêu", "Thiếu kịch bản giữ chân, không có mồi câu giá trị khiến nhóm biến thành \"nhóm chết\" sau 48h."],
            [Trash2, "Tệp data rác & toàn đối thủ bán hàng", "Nhóm 1000 người nhưng 999 người vào đi spam chéo, không tìm thấy người mua thực tế."],
          ].map(([Icon, t, d], i) => {
            const I = Icon as typeof Ban;
            return (
              <div key={i} className={`${card} p-7`}>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-warning-soft text-warning">
                  <I className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{t as string}</h3>
                <p className="mt-2 text-muted-foreground">{d as string}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Instructor */}
      <Section id="instructor">
        <Heading eyebrow="Giảng viên" title="Giới thiệu chuyên gia Lê Long Marketing" />
        <div className="grid items-start gap-8 md:grid-cols-5">
          <div className={`${card} p-8 text-center md:col-span-2`}>
            <div className="relative mx-auto h-32 w-32">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-primary text-4xl font-extrabold text-primary-foreground shadow-primary">
                LL
              </div>
              <BadgeCheck className="absolute bottom-1 right-1 h-8 w-8 rounded-full bg-background text-primary" />
            </div>
            <h3 className="mt-5 flex items-center justify-center gap-1 text-xl font-bold">Lê Long Marketing</h3>
            <span className="mt-2 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
              Top Growth Zalo Expert
            </span>
            <div className="mt-6 grid grid-cols-3 gap-2 border-t border-border pt-6">
              {[["6+", "năm thực chiến"], ["50.000+", "tệp Zalo xây dựng"], ["1.200+", "nhóm điều hành"]].map(([n, l]) => (
                <div key={l}>
                  <div className="text-lg font-bold text-primary">{n}</div>
                  <div className="text-xs text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-3">
            <blockquote className="border-l-4 border-primary pl-5 text-lg italic leading-relaxed">
              "Tôi không dạy bạn lý thuyết làm giàu viển vông. Tôi dạy bạn những gì tôi và đội ngũ đã đổ tiền, thử sai hàng trăm tài
              khoản để đúc kết thành quy trình thực chiến an toàn và ra đơn thực tế."
            </blockquote>
            <div className="mt-8 space-y-4">
              {[
                ["100% Cầm tay chỉ việc trên Tool", "Buổi nào cũng mở MinZalo thực hành thao tác thật."],
                ["Kèm sát tối đa 30 học viên", "Giải đáp vướng mắc trực tiếp từng người ngay trong buổi học."],
                ["Cung cấp vũ khí tận răng", "Tặng sẵn kho kịch bản Spintax, danh bạ nhóm và 20 ngày tool."],
              ].map(([t, d]) => (
                <div key={t} className={`${card} flex gap-4 p-5`}>
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-success" />
                  <div>
                    <h4 className="font-semibold">{t}</h4>
                    <p className="text-sm text-muted-foreground">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Curriculum */}
      <Section id="curriculum" className="bg-muted/60">
        <Heading eyebrow="Lộ trình" title="6 buổi học thực chiến" sub="Tối Thứ 3 & Thứ 6 hàng tuần, 20:00 - 21:30" />
        <div className="grid gap-5 md:grid-cols-2">
          {[
            ["Thứ 3 - 12/11", "Khai Thông Tư Duy Ao Cá Zalo & Dựng \"Ngôi Nhà Nhóm\" Chuẩn SEO", ["Nhận ngay 20 ngày MinZalo Pro bản quyền.", "Tư duy gom cá về ao riêng — Kênh chuyển đổi 0đ bền vững nhất 2026.", "3 công thức đặt tên nhóm kích thích tham gia & bài ghim mồi giữ chân 24h đầu."]],
            ["Thứ 6 - 15/11", "Tuyệt Chiêu Săn Data SĐT & Link Group Ngành 0 Đồng", ["Kỹ thuật Google Dorking nâng cao bới hàng nghìn link nhóm Zalo công khai.", "Cách thâm nhập và quét group đối thủ từ Facebook, YouTube, TikTok."]],
            ["Thứ 3 - 19/11", "Lọc Tệp Sạch & Phân Loại Đúng Ngành Bằng MinZalo", ["Phân biệt nhóm người mua thật vs nhóm rác đi spam.", "Thực hành tính năng \"Tra Zalo\" dò định danh SĐT thật, loại bỏ 100% sim rác."]],
            ["Thứ 6 - 22/11", "Viết Kịch Bản Spintax & Chiến Thuật Gửi Tin Chống Quét Nick", ["Công thức kịch bản mời nhóm 4 bước đạt tỷ lệ đồng ý >60%.", "Cấu hình Spintax đa biến thể và cài đặt nhịp trễ an toàn 45-90s trên MinZalo."]],
            ["Thứ 3 - 26/11", "Giờ Vàng Seeding & Nghệ Thuật Dùng Nick Mồi \"Chân Gỗ\"", ["3 khung giờ vàng gửi tin kéo mem có tỷ lệ tương tác cao nhất.", "Kịch bản nick phụ tạo hiệu ứng đám đông, kích thích khách thật đặt câu hỏi."]],
            ["Thứ 6 - 29/11", "Đóng Gói Phễu Chuyển Đổi Ra Đơn & Tự Động Hóa Với Mina AI", ["Kịch bản dẫn dắt thành viên từ đọc bài trong nhóm Zalo sang chốt đơn mua hàng.", "Tích hợp Bot Mina AI tự động trả lời tư vấn 1-1 khi khách nhắn tin riêng."]],
          ].map(([date, title, items], i) => (
            <div key={i} className={`${card} p-7`}>
              <div className="mb-3 flex items-center gap-3">
                <span className="rounded-md bg-primary px-2.5 py-1 text-xs font-bold text-primary-foreground">Buổi {i + 1}</span>
                <span className="text-xs font-medium text-muted-foreground">{date as string} · 20:00</span>
              </div>
              <h3 className="text-lg font-semibold leading-snug">{title as string}</h3>
              <ul className="mt-4 space-y-2">
                {(items as string[]).map((it) => (
                  <li key={it} className="flex gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Bonus */}
      <Section id="bonus">
        <Heading eyebrow="Quà tặng" title="3 phần quà giá trị 1.200.000đ" />
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["20 Ngày dùng thử full tính năng MinZalo Pro", "400.000đ"],
            ["Bộ 50+ Mẫu kịch bản Spintax kéo nhóm đa ngành", "500.000đ"],
            ["Kho 500+ Link nhóm Zalo chất lượng cao đã kiểm duyệt", "300.000đ"],
          ].map(([t, v], i) => (
            <div key={t} className={`${card} p-7`}>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
                <Gift className="h-5 w-5" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Quà {i + 1}</p>
              <h3 className="mt-1 font-semibold">{t}</h3>
              <p className="mt-3 text-sm">
                Trị giá <b className="text-primary">{v}</b>
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border-2 border-success bg-success-soft p-8 md:p-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-center">
            <ShieldCheck className="h-14 w-14 shrink-0 text-success" />
            <div>
              <h3 className="text-xl font-bold text-success md:text-2xl">
                CHÍNH SÁCH ĐẶC BIỆT: HOÀN TRẢ 100% TIỀN HỌC (HỌC PHÍ 0 ĐỒNG)
              </h3>
              <p className="mt-3 leading-relaxed">
                Sau khi kết thúc 6 buổi học, nếu bạn quyết định nâng cấp lên <b>Gói Năm của MinZalo</b>, chúng tôi sẽ{" "}
                <b>HOÀN LẠI TOÀN BỘ 399.000đ TIỀN HỌC PHÍ</b> vào tài khoản ngân hàng của bạn! Nếu chọn gói tháng (599k/tháng), bạn
                thanh toán bình thường.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Pricing + form */}
      <Section id="register-form" className="bg-muted/60">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div className={`${card} p-8`}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Học phí Khóa K126</p>
            <p className="mt-4 text-lg text-muted-foreground line-through">1.500.000đ</p>
            <div className="flex items-end gap-3">
              <span className="text-5xl font-extrabold tracking-tight">399.000đ</span>
              <span className="mb-2 rounded-md bg-success-soft px-2 py-1 text-xs font-bold text-success">Tiết kiệm 73%</span>
            </div>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-warning-soft px-3 py-1.5 text-sm font-medium text-warning">
              <Users className="h-4 w-4" /> Chỉ áp dụng cho 30 học viên Khóa K126
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "6 buổi live Zoom tương tác + record HD",
                "20 ngày MinZalo Pro (trị giá 400K)",
                "50+ kịch bản Spintax & 500+ link nhóm",
                "Hoàn 100% học phí khi nâng cấp Gói Năm",
              ].map((x) => (
                <li key={x} className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-success" /> {x}
                </li>
              ))}
            </ul>
          </div>
          <RegisterForm onDone={setModal} />
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq">
        <Heading eyebrow="FAQ" title="Câu hỏi thường gặp" />
        <div className="mx-auto max-w-3xl space-y-3">
          {[
            ["Tôi không rành về máy tính và kỹ thuật công nghệ thì có học được không?", "Có, khóa học thiết kế theo phương pháp cầm tay chỉ việc, MinZalo 100% tiếng Việt rất dễ dùng."],
            ["20 ngày dùng thử MinZalo Pro được cấp khi nào và có bị giới hạn tính năng không?", "Được cấp ngay Buổi 1, full toàn bộ tính năng cao cấp nhất."],
            ["Nếu bận một buổi có được xem lại Record không?", "Có, toàn bộ 6 buổi đều được ghi hình HD và gửi link kèm tài liệu thực hành sau mỗi buổi."],
            ["Điều kiện để được hoàn lại 399.000đ học phí là gì?", "Sau khóa học, chỉ cần bạn nâng cấp lên Gói Năm của MinZalo, ban tổ chức sẽ hoàn lại 100% số tiền 399K vào tài khoản ngân hàng của bạn."],
          ].map(([q, a]) => (
            <Faq key={q} q={q ?? ""} a={a ?? ""} />
          ))}
        </div>
      </Section>

      <footer className="border-t border-border bg-background px-4 py-10 text-sm text-muted-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <p>© 2026 LÊ LONG MARKETING × MINZALO ECOSYSTEM. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <a href="tel:0987654321" className="hover:text-foreground">Hotline: 0987 654 321</a>
            <a href="https://zalo.me/0987654321" target="_blank" rel="noreferrer" className="hover:text-foreground">Hỗ trợ Zalo</a>
            <a href="https://minzalo.com/" target="_blank" rel="noreferrer" className="hover:text-foreground">Điều khoản</a>
            <a href="https://minzalo.com/" target="_blank" rel="noreferrer" className="hover:text-foreground">Bảo mật</a>
          </div>
        </div>
      </footer>

      {modal && <QrModal {...modal} onClose={() => setModal(null)} />}
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={card}>
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold">
        {q}
        <ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-muted-foreground">{a}</p>
        </div>
      </div>
    </div>
  );
}

const input =
  "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/20";

export function isValidPhone(p: string) {
  return /^0\d{9}$/.test(p.trim());
}

function RegisterForm({ onDone }: { onDone: (v: { name: string; phone: string }) => void }) {
  const [err, setErr] = useState<string | null>(null);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") ?? "").trim();
    const phone = String(f.get("phone") ?? "").trim();
    if (!name) return setErr("Vui lòng nhập họ và tên.");
    if (!isValidPhone(phone)) return setErr("Số điện thoại phải gồm 10 chữ số và bắt đầu bằng 0.");
    if (!f.get("industry")) return setErr("Vui lòng chọn ngành hàng.");
    setErr(null);
    onDone({ name, phone });
  };
  return (
    <form onSubmit={submit} className={`${card} space-y-4 p-8`} noValidate>
      <h3 className="text-xl font-bold">Đăng ký giữ chỗ</h3>
      <input name="name" placeholder="Họ và tên" className={input} />
      <input name="phone" type="tel" inputMode="numeric" maxLength={10} placeholder="Số điện thoại có Zalo" className={input} />
      <select name="industry" defaultValue="" className={input}>
        <option value="" disabled>Ngành hàng đang kinh doanh</option>
        {["Thời trang", "Bất động sản", "Gia dụng", "Mỹ phẩm", "F&B", "Khóa học / Đào tạo", "Dịch vụ / B2B", "Khác"].map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <textarea name="note" rows={3} placeholder="Ghi chú / Mong muốn khi tham gia (không bắt buộc)" className={input} />
      {err && (
        <p className="flex items-center gap-2 text-sm text-destructive">
          <AlertCircle className="h-4 w-4" /> {err}
        </p>
      )}
      <button type="submit" className={`${cta} w-full`}>
        GIỮ CHỖ NGAY — 399.000đ <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}

function QrModal({ name, phone, onClose }: { name: string; phone: string; onClose: () => void }) {
  const [copied, setCopied] = useState<string | null>(null);
  const syntax = `K126 ${phone}`;
  const qr = `https://img.vietqr.io/image/MBBANK-${BANK_ACC}-compact2.png?amount=399000&addInfo=${encodeURIComponent(syntax)}&accountName=${encodeURIComponent("LE LONG MARKETING")}`;
  const copy = (k: string, v: string) => {
    navigator.clipboard?.writeText(v);
    setCopied(k);
    setTimeout(() => setCopied(null), 1800);
  };
  const rows: [string, string, boolean][] = [
    ["Ngân hàng", "Quân Đội (MBBank)", false],
    ["Số tài khoản", BANK_ACC, true],
    ["Chủ tài khoản", "LE LONG MARKETING", false],
    ["Số tiền", "399.000 VNĐ", false],
    ["Nội dung CK", syntax, true],
  ];
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-foreground/50 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full max-w-md rounded-2xl bg-card p-6 shadow-card" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute right-4 top-4 text-muted-foreground hover:text-foreground" aria-label="Đóng">
          <X className="h-5 w-5" />
        </button>
        <div className="text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-success" />
          <h3 className="mt-3 text-lg font-bold">
            Chúc mừng {name} đã đăng ký giữ chỗ Khóa K126 thành công!
          </h3>
        </div>
        <img src={qr} alt="Mã VietQR thanh toán học phí" className="mx-auto mt-4 w-56 rounded-lg border border-border" />
        <div className="mt-4 divide-y divide-border rounded-xl border border-border text-sm">
          {rows.map(([k, v, c]) => (
            <div key={k} className="flex items-center justify-between gap-3 px-4 py-2.5">
              <span className="text-muted-foreground">{k}</span>
              <span className="flex items-center gap-2 font-semibold">
                {v}
                {c && (
                  <button onClick={() => copy(k, v)} className="text-primary" aria-label={`Sao chép ${k}`}>
                    {copied === k ? <Check className="h-4 w-4 text-success" /> : <Copy className="h-4 w-4" />}
                  </button>
                )}
              </span>
            </div>
          ))}
        </div>
        {copied && <p className="mt-2 text-center text-xs font-semibold text-success">Đã sao chép!</p>}
        <p className="mt-4 rounded-lg bg-secondary p-3 text-xs leading-relaxed text-secondary-foreground">
          Vé tham gia phòng học Zoom + Tài khoản 20 ngày MinZalo sẽ được gửi tự động qua Zalo của bạn trong vòng 15 phút sau khi
          hoàn tất thanh toán.
        </p>
      </div>
    </div>
  );
}
