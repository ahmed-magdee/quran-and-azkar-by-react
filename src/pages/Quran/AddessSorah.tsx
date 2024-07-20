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
      <h1 className="font-noto-urdo mb-8 w-[150px] sm:w-[200px] mx-auto relative before:content-[''] before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-[10px] before:h-[10px] before:rounded-full before:bg-green-header dark:before:bg-dark-green after:content-[''] after:absolute after:w-[10px] after:h-[10px] after:top-1/2 after:right-0 after:-translate-y-1/2 after:rounded-full after:bg-green-header dark:after:bg-dark-green">
        {name}
      </h1>
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
