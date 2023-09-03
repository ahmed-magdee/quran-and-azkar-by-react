import { useState } from "react";

function SaveComponent() {
  const [time, setTime] = useState(false);

  const timeOut = setTimeout(() => {
    clearTimeout(timeOut);
    setTime(true);
  }, 300);

  return (
    <div
      className={`w-[200px] h-[90px] fixed top-[100px] left-1/2 -translate-x-1/2 text-white flex items-center justify-center text-2xl rounded-xl bg-blue-800 transition-all duration-300 ${
        time && "-translate-y-5 opacity-0"
      }`}
    >
      تم حفظ الآية!
    </div>
  );
}

export default SaveComponent;
