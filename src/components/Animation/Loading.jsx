import { loadingData } from "./loadingData";

function Loading({ popup }) {
  return (
    <div
      className={`flex items-center justify-center ${
        popup ? "w-[200px] h-[300px] mx-auto" : "w-full h-[calc(100vh-68px)]"
      }`}
    >
      {loadingData.map((one) => (
        <span
          key={one.id}
          style={one.style}
          className={`animate-loading delay-[calc(${one.id}*0.15s)]`}
        ></span>
      ))}
    </div>
  );
}

export default Loading;
