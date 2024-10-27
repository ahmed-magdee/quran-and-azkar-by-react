import CircleAbsolute from "../../components/CircleAbsolute";

type AddessSorahTpe = {
  name: string | undefined;
  number: string | undefined;
  numberOfAyahs: string | undefined;
  revelationType: string | undefined;
};

export default function AddressSorah({
  name,
  number,
  numberOfAyahs,
  revelationType,
}: AddessSorahTpe) {
  return (
    <div className="mt-8">
      <h2 className="font-noto-urdo mb-8 w-[150px] sm:w-[200px] mx-auto relative">
        <CircleAbsolute width="10px" leftOrRight="left-0" />
        <CircleAbsolute width="10px" leftOrRight="right-0" />
        {name}
      </h2>
      <div className="text-lg sm:text-xl">
        <p className="mb-1">
          رقم <span className="square">{number}</span> <span>في المصحف</span>
        </p>
        <p className="mb-1">
          عدد الآيات <span className="square">{numberOfAyahs}</span>
        </p>
        <p>
          سورة{" "}
          {revelationType && revelationType === "Medinan" ? "مدنية" : "مكية"}
        </p>
      </div>
    </div>
  );
}
