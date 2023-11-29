type DataLoopingProps = {
  dataWithKey?: {
    category: string | undefined;
    content: string | undefined;
    description: string | undefined;
    count: number | undefined;
  }[];
  zekr: string;
};

type AllData =
  | {
      category?: string;
      content?: string;
      description?: string;
      count?: number;
    }[]
  | undefined;

// Component
export default function DataLooping({ dataWithKey, zekr }: DataLoopingProps) {
  // Looping Becuase Azkar al-sabah
  let allData: AllData;
  dataWithKey?.map((one) => {
    if (one.category === "أذكار الصباح") {
      const firstIndexInDataWithKeys = dataWithKey.slice(0, 1);
      const allDataAfterFirstIndex = dataWithKey.slice(1);
      allData = allDataAfterFirstIndex.concat(...firstIndexInDataWithKeys);
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
          className="mb-8 max-w-[800px] mx-auto border-b border-green-header pb-3"
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
              <span className="bg-green-200 py-[3px] px-2 rounded-md text-base mr-[5px] inline-block">
                {count && +count == 1
                  ? "تُقرأ مرة"
                  : count && +count == 2
                  ? "تُقرأ مرتين"
                  : count && +count >= 3 && +count <= 10
                  ? `تُقرأ ${count} مرات`
                  : count && +count >= 10 && `تُقرأ ${count} مرة`}
              </span>
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
    <div className="mt-10 border-t border-green-header pt-6 font-cairo">
      <h1 className="border-b border-green-header w-fit mx-auto relative before:content-[''] before:absolute before:w-[10px] before:h-[10px]  before:top-1/2 before:-right-5 before:-translate-y-1/2 before:bg-green-header before:rounded-full after:content-[''] after:absolute after:w-[10px] after:h-[10px] after:bg-green-header after:rounded-full after:top-1/2 after:-left-5 after:-translate-y-1/2">
        {zekr}
      </h1>
      <div className="mt-5">{looping}</div>
    </div>
  );
}
