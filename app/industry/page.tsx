import Industries from "@/app/industry/Industries";
import Companies from "@/app/industry/Companies";

export default function IndustryPage() {
  return (
    <main className="p-[187px_81px_81px_81px] flex justify-between items-start">
      {/* <h1 className="font-actay font-bold text-[48px] text-[#8B8B8B] mb-8">
        Промышленность региона
      </h1> */}
      <Industries />
      <div
        style={{
          background: "rgba(157, 157, 157, 0.3)",
          backdropFilter: "blur(2px)",
          right: "138px",
          bottom: "91px",
          padding: "25px 0px",
          position: "absolute",
          width: "750px",
          borderRadius: "25px",
        }}
      >
        <ul className="rounded-[20px] w-[530px] mx-auto font-sans font-medium text-[18px] text-white bg-[rgba(157,157,157,0.3)] list-disc p-[30px_25px_40px_50px] leading-[150%] tracking-[0.54px] [text-shadow:0px_0px_23.2px_#0000001A]">
          <li>
            Машиностроительный комплекс представлен предприятиями, производящими
            широкий спектр продукции от горного оборудования до автомобильных
            компонентов.
          </li>
          <li>
            Отрасль обладает уникальными компетенциями в области тяжелого
            машиностроения и производства специализированного оборудования.
          </li>
        </ul>
      </div>
      <Companies />
    </main>
  );
}
