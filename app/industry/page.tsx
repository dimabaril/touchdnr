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
    </main>
  );
}
