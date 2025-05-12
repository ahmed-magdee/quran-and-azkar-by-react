import image from "../../assets/landing.png";

export default function LandingPageTwo() {
  return (
    <div className="container min-h-[calc(100vh-70px)] flex items-normal lg:items-center gap-5 flex-wrap">
      <div className="w-full lg:w-[calc((100%/2)-10px)]">
        <img
          className="mx-auto w-full h-full animate-img"
          src={image}
          alt="landing-img"
        />
      </div>
      <div className="w-full lg:w-[calc((100%/2)-10px)] text-center font-cairo">
        <h2 className="font-noto-urdo text-3xl sm:text-5xl text-green-header dark:text-dark-green mb-10">
          قرآن وأذكار
        </h2>
        <p className="text-lg sm:text-2xl sm:leading-[1.7] dark:text-white">
          يحتوي موقعنا علي القرآن الكريم والتفسير الميسر والحديث الشريف وجميع
          الأذكار التي تحتاجها في حياتك اليومية <br />
          سيكون هذا الموقع محدث بصورة دائمة إن شاء الله.
        </p>
      </div>
    </div>
  );
}
