export default function LoadingAnimation() {
  const spans = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <div className="fixed top-0 right-0 bg-white/70 backdrop-blur-md w-full h-full flex items-center justify-center z-30">
      {spans.map((one) => (
        <span
          key={one}
          className="w-[12px] h-[12px] bg-green-header absolute rounded-full animate-show opacity-0"
          style={{
            transform: `rotate(calc(${one} * (360deg / 15))) translateY(35px)`,
            animationDelay: `${one * 0.15}s`,
          }}
        ></span>
      ))}
    </div>
  );
}
