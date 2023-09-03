import axios from "axios";
import { TAFSIR_FAILURE, TAFSIR_REQUEST, TAFSIR_SUCCESS } from "./tafsirType";

const tafsirRequest = () => {
  return {
    type: TAFSIR_REQUEST,
  };
};
const tafsirSuccess = (data) => {
  return {
    type: TAFSIR_SUCCESS,
    payload: data,
  };
};
const tafsirFailure = (error) => {
  return {
    type: TAFSIR_FAILURE,
    payload: "حدث خطأ ما",
  };
};
export const tafsirFetch = (sorahNumber) => {
  return (dispatch) => {
    dispatch(tafsirRequest());
    axios
      .get(
        `https://quranenc.com/api/v1/translation/sura/arabic_moyassar/${sorahNumber}`
      )
      .then((response) => {
        const allData = response.data;
        dispatch(tafsirSuccess(allData));
      })
      .catch((error) => dispatch(tafsirFailure(error)));
  };
};
