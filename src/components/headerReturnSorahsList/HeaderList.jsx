import { useNavigate } from "react-router-dom";

function HeaderList({ scroll }) {
  const navigate = useNavigate();

  return (
    <header
      className={`h-[68px] flex items-center justify-start transition-all duration-300 sticky top-0 z-20 ${
        !scroll
          ? "bg-blue-200 shadow-popup-shadow"
          : "bg-blue-800 shadow-[0px_4px_15px_0px_#1e40af]"
      }`}
    >
      <div className="container">
        <button
          className="bg-blue-800 text-white py-1 px-5 rounded-xl"
          onClick={() => navigate(-1)}
        >
          الرجوع إلي قائمة السور
        </button>
      </div>
    </header>
  );
}

export default HeaderList;
