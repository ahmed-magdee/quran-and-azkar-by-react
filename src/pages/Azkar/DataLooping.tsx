import CircleAbsolute from "../../components/CircleAbsolute";
import moreAzkarSabahAndMissaa from "../../data/AddMoreAzkar";

type DataLoopingProps = {
  dataWithKey?: {
    category: string | undefined;
    content: string | undefined;
    description: string | undefined;
    count: number | undefined;
  }[];
  zekr: string;
};

type AllData = {
  category?: string;
  content?: string;
  description?: string;
  count?: number;
}[];

// Main Component
export default function DataLooping({ dataWithKey, zekr }: DataLoopingProps) {
  // Looping Becuase Azkar al-sabah
  let allData: AllData = [];
  dataWithKey?.map((one) => {
    if (one.category === "أذكار الصباح") {
      const firstIndexInDataWithKeys = dataWithKey.slice(0, 1);
      const allDataAfterFirstIndex = dataWithKey.slice(1);
      allData = [
        ...moreAzkarSabahAndMissaa("أذكار الصباح"),
        ...allDataAfterFirstIndex.concat(...firstIndexInDataWithKeys),
      ] as never;
    } else if (one.category === "أذكار المساء") {
      allData = [
        ...moreAzkarSabahAndMissaa("أذكار المساء"),
        ...dataWithKey,
      ] as never;
    } else {
      allData = dataWithKey;
    }
  });

  // Looping Data
  const looping = allData?.map((one) => {
    const { count, content, description, category } = one;

    return (
      category !== "stop" && (
        <div
          key={content}
          className="mb-8 max-w-[800px] mx-auto border-b border-green-header dark:border-dark-green pb-3"
        >
          {content !== "stop" && (
            <span className="text-xl sm:text-2xl leading-[2] sm:leading-[2]">
              {content
                ?.split("\\n',")
                .join(`" '"`)
                .split(`'"`)
                .join(" ")
                .split(`"`)
                .join(" ")
                .split(`'`)
                .join(" ")}
              {category !== "دعاء ختم القرآن" && (
                <span className="bg-green-header/90 py-[3px] px-2 rounded-md text-base mr-[5px] inline-block text-white">
                  {count && +count == 1
                    ? "تُقرأ مرة"
                    : count && +count == 2
                    ? "تُقرأ مرتين"
                    : count && +count >= 3 && +count <= 10
                    ? `تُقرأ ${count} مرات`
                    : count && +count >= 10 && `تُقرأ ${count} مرة`}
                </span>
              )}
            </span>
          )}
          {description && description !== "stpo" && (
            <p className="mt-[20px] w-fit mx-auto bg-green-header text-white py-[3px] px-2 rounded-md leading-[1.8] text-lg">
              {description}
            </p>
          )}
        </div>
      )
    );
  });

  // Return
  return (
    <div className="dark:text-white mt-10 border-t border-green-header dark:border-dark-green pt-6 font-cairo">
      <h2 className="text-xl sm:text-3xl border-b border-green-header dark:border-white w-fit mx-auto relative px-5">
        <CircleAbsolute width="10px" leftOrRight="left-0" />
        <CircleAbsolute width="10px" leftOrRight="right-0" />
        {zekr}
      </h2>
      <div className="mt-10">{looping}</div>
    </div>
  );
}
