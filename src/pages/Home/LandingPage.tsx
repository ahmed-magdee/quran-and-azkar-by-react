import { navLinks } from "../../data/data";

// Component
export default function LandingPage() {
  // Looping Data
  const loopingData = navLinks.map((link) => {
    return (
      <p
        key={link.id}
        className="land-item w-[92px] sm:w-[110px] h-[85px] sm:h-[100px] text-base sm:text-lg bg-green-header flex items-center justify-center animate-scale opacity-0 border border-white transition-all duration-300 hover:-translate-y-3"
        style={{ animationDelay: `${1.5 * link.id}s`, opacity: 1 }}
        set-data={1.5 + link.id}
      >
        {link.name}
      </p>
    );
  });

  // Return
  return (
    <div className="landing-page bg-cover bg-center min-h-[calc(100vh-70px)] text-white relative">
      <div className="absolute top-0 right-0 bg-gradient-to-t from-[#004d40d1] to-[#00000078] w-full h-full" />
      <div className="w-full flex items-center flex-col gap-6 px-[15px] absolute bottom-20 animate-top-to-bottom">
        <h1>الموقع يحتوي علي</h1>
        <div className="flex gap-4 items-center justify-center flex-wrap">
          {loopingData}
        </div>
      </div>
    </div>
  );
}
