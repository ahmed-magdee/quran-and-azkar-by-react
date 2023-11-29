type TimingHeaderProps = {
  data?:
    | {
        hijri?: {
          weekday: {
            ar: string;
          };
          day: string;
          month: {
            ar: string;
          };
          year: string;
        };
      }
    | undefined;
};

export default function TimingHeader({ data }: TimingHeaderProps) {
  // The Date
  const theDate =
    data?.hijri &&
    `اليوم ${data?.hijri?.weekday.ar} الموافق ${data?.hijri?.day}-${data?.hijri?.month.ar}-${data?.hijri.year}هـ`;

  //Return
  return <h1 className="mb-[10px] leading-[1.8]">{theDate}</h1>;
}
