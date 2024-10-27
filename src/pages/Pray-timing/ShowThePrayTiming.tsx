/* eslint-disable @typescript-eslint/no-explicit-any */
type ShowThePrayTimingProps = {
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

  // =========================================================================

  // getNextTimePrayer Funtion
  function getNextPrayerTime(currentTime: string) {
    const times = (keys || ([] as any)).map((prayer: string | number) => {
      const [hours, minutes] = time && time[prayer].split(":");
      const date = new Date();
      date.setHours(hours, minutes, 0);
      return { prayer, time: date };
    });

    times.sort((a: any, b: any) => a.time - b.time);

    const now = new Date();
    const currentTimeParts = currentTime.split(":").map(Number);
    now.setHours(currentTimeParts[0], currentTimeParts[1]);

    for (const { prayer, time } of times) {
      if (time > now) {
        return prayer;
      }
    }

    return "Lastthird"; // if all today's prayers have passed, return Lastthird for the next day
  }

  const currentTime = new Date().toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  // // Looping
  const dataWeWant =
    time &&
    keys?.map((key) => {
      return (
        <li
          key={key}
          className={`h-[170px] border border-green-header rounded-xl flex items-center justify-center flex-col font-cairo p-3 shadow-box-sorah relative before:content-[''] before:absolute before:w-0 before:h-0 before:bg-green-header before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:transition-all before:duration-300 ${
            getNextPrayerTime(currentTime) &&
            key === getNextPrayerTime(currentTime)
              ? "before:h-full before:w-full text-white"
              : " hover:before:w-full hover:before:h-full hover:text-white"
          } overflow-hidden z-10 before:-z-[1] transition-all duration-300`}
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
