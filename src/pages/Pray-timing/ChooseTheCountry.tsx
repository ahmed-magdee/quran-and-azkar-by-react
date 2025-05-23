import { Dispatch, SetStateAction } from "react";
import { rightLocation } from "../../data/data";

type ChooseTheCountry = {
  selectValue: string;
  setSelectValue: Dispatch<SetStateAction<string>>;
};

// Component
export default function ChooseTheCountry({
  selectValue,
  setSelectValue,
}: ChooseTheCountry) {
  // looping on locations
  const looping = rightLocation.map(({ location, value }) => (
    <option key={location} value={value}>
      {location}
    </option>
  ));

  // selectChange
  const selectChange = (e: { target: { value: SetStateAction<string> } }) => {
    setSelectValue(e.target.value);
  };

  // Return
  return (
    <div className="border-b border-green-header pb-5">
      <p className="sm:text-xl">
        هذه المواقيت طبقا لمحافظة{" "}
        <span className="font-bold">
          {
            rightLocation.find((location) => location.value === selectValue)
              ?.location
          }
        </span>
      </p>
      <p className="sm:text-xl">
        أختر محافظتك الصحيحة{" "}
        <select
          name="location"
          id="location"
          className="main-select"
          value={selectValue}
          onChange={selectChange}
        >
          {looping}
        </select>
      </p>
    </div>
  );
}
