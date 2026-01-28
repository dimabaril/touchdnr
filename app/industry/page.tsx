import Link from "next/link";
import Industries from "@/components/Industries";
import Companies from "@/components/Companies";

export default function IndustryPage() {
  return (
    <main className="p-[187px_81px_81px_81px] flex justify-between items-start">
      {/* <h1 className="font-actay font-bold text-[48px] text-[#8B8B8B] mb-8">
        Промышленность региона
      </h1> */}
      <Industries />
      <Companies />
      {/* <Link
        href="/"
        className="font-sans text-[18px] text-white bg-[#9089854D] px-8 py-4 rounded-[20px] hover:bg-[#90898566] transition-colors"
      >
        ← Вернуться на главную
      </Link> */}
    </main>
  );
}
