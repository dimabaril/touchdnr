import Link from "next/link";

export default function InfoPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="font-actay font-bold text-[48px] text-[#8B8B8B] mb-8">
        Информация о регионе
      </h1>
      <p className="font-sans text-[24px] text-[#8B8B8B] mb-12">
        Страница в разработке
      </p>
      <Link
        href="/"
        className="font-sans text-[18px] text-white bg-[#9089854D] px-8 py-4 rounded-[20px] hover:bg-[#90898566] transition-colors"
      >
        ← Вернуться на главную
      </Link>
    </main>
  );
}
