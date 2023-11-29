type ShowThePrayTimingProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  time?: { [key: string]: any } | undefined;
};

// Component
export default function ShowThePrayTiming({ time }: ShowThePrayTimingProps) {
  const keys =
    time &&
    Object.keys(time).filter(
      (key) =>
        key === "Fajr" ||
        key === "Dhuhr" ||
        key === "Asr" ||
        key === "Maghrib" ||
        key === "Isha" ||
        key === "Lastthird"
    );

  // ============================================================================
  // Know The Next Time
  // الحصول على الوقت الحالي
  const currentTime = new Date();

  // تحويل الوقت الحالي إلى تنسيق HH:MM
  const currentHours = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes();

  // تحويل الأوقات في الكائن إلى دقائق للمقارنة
  const timesInMinutes: { [index: string]: number } = {};
  for (const key in time) {
    const timeParts = time[key].split(":");
    timesInMinutes[key] = parseInt(timeParts[0]) * 60 + parseInt(timeParts[1]);
  }

  // تحويل الوقت الحالي إلى دقائق للمقارنة
  const currentMinutesPastMidnight = currentHours * 60 + currentMinutes;

  // العثور على المفتاح الأقرب التالي
  let closestNextKey: string;
  let smallestDifference = Infinity;
  for (const key in timesInMinutes) {
    const difference = timesInMinutes[key] - currentMinutesPastMidnight;
    // يعني عايزين القيمة ال اكبر من الصفر واصغر من المالانهاية
    if (difference > 0 && difference < smallestDifference) {
      smallestDifference = difference;
      closestNextKey = key;
    }
  }

  // =========================================================================

  // Looping
  const dataWeWant =
    time &&
    keys?.map((key) => {
      return (
        <li
          key={key}
          className={`h-[170px] border border-green-header rounded-xl flex items-center justify-center flex-col font-cairo p-3 shadow-box-sorah relative before:content-[''] before:absolute before:w-0 before:h-0 before:bg-[#71bfb8] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:transition-all before:duration-300 ${
            key === closestNextKey
              ? "before:h-full before:w-full"
              : " hover:before:w-full hover:before:h-full"
          } overflow-hidden z-10 before:-z-[1]`}
        >
          <p className="text-2xl font-bold mb-5">
            {key == "Fajr"
              ? "الفجر"
              : key == "Dhuhr"
              ? "الظهر"
              : key == "Asr"
              ? "العصر"
              : key == "Maghrib"
              ? "المغرب"
              : key == "Isha"
              ? "العشاء"
              : "الثلث الأخير"}
          </p>
          <p className="text-lg">
            {time && time !== undefined && time[key]?.split(":")[0] < "12"
              ? `${time && time[key]} ص`
              : `${time && time[key]} م`}
          </p>
        </li>
      );
    });

  // Return
  return <ul className="pray-time-ul mt-10">{dataWeWant}</ul>;
}
