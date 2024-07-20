type SelectProps = {
  pagination?:
    | {
        pages: [];
        endIndex: string;
      }
    | undefined;
  selectStatue: string;
  hadeethNumber: number;
  setSelectStatue: (e: string) => void;
  setHadeethNumber: (arg: number) => void;
};

export default function Select({
  pagination,
  selectStatue,
  hadeethNumber,
  setHadeethNumber,
  setSelectStatue,
}: SelectProps) {
  // changeHandler
  const changeHandler = (e: { target: { value: string } }) => {
    setSelectStatue(e.target.value);
  };

  // nextBtn
  const nextBtn = () => {
    setHadeethNumber(hadeethNumber + 1);
  };

  //previousBtn
  const previousBtn = () => {
    setHadeethNumber(hadeethNumber - 1);
  };

  // Return
  return (
    <div className="select-and-buttons flex items-center justify-center gap-8 flex-wrap">
      <button
        className={`border border-green-header dark:border-dark-green py-[2px] px-[7px] sm:text-lg rounded-md transition-all duration-300 hover:bg-green-header hover:text-white ${
          pagination &&
          hadeethNumber == +pagination?.endIndex &&
          "pointer-events-none"
        }`}
        type="button"
        onClick={nextBtn}
      >
        التالي
      </button>
      <select
        className="main-select"
        name="page"
        id="page"
        value={selectStatue}
        onChange={changeHandler}
      >
        {pagination?.pages.map((page) => (
          <option value={page} key={page}>
            الصفحة {page}
          </option>
        ))}
      </select>
      <button
        className={`border border-green-header dark:border-dark-green py-[2px] px-[7px] sm:text-lg rounded-md transition-all duration-300 hover:bg-green-header hover:text-white ${
          hadeethNumber === 0 && "pointer-events-none"
        }`}
        type="button"
        onClick={previousBtn}
      >
        السابق
      </button>
    </div>
  );
}
