type AzkarKeysProps = {
  allKeys?: string[];
  zekr: string;
  setZekr: (key: string) => void;
};

export default function AzkarKeys({ allKeys, zekr, setZekr }: AzkarKeysProps) {
  // changeAzkar
  const changeAzkar = (key: string) => {
    setZekr(key);
  };

  //Looping Data
  const lis = allKeys?.map((key) => (
    <li
      key={key}
      className={`cursor-pointer border border-green-header rounded-md p-2 w-[225px] transition-all duration-300 hover:text-white relative z-10 overflow-hidden before:absolute before:content-[''] before:w-0 before:h-full before:top-0 before:right-0 before:bg-green-header before:transition-all before:duration-300 before:-z-[1] hover:before:w-1/2 after:content-[''] after:absolute after:top-0 after:left-0 after:w-0 after:h-full after:transition-all after:duration-300 after:bg-green-header hover:after:w-1/2 after:-z-[1] ${
        zekr === key && "text-white after:w-1/2 before:w-1/2"
      }`}
      onClick={() => changeAzkar(key)}
    >
      {key}
    </li>
  ));

  // Return
  return (
    <ul className="flex items-center justify-center gap-5 flex-wrap">{lis}</ul>
  );
}
