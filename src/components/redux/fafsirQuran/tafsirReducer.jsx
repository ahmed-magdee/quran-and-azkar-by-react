import { TAFSIR_FAILURE, TAFSIR_REQUEST, TAFSIR_SUCCESS } from "./tafsirType";

const initialState = {
  loading: false,
  allTafsirat: [],
  error: "",
};

const tafsiratReducer = (state = initialState, action) => {
  switch (action.type) {
    case TAFSIR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TAFSIR_SUCCESS:
      return {
        loading: false,
        allTafsirat: action.payload,
        error: "",
      };
    case TAFSIR_FAILURE:
      return {
        loading: false,
        allTafsirat: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default tafsiratReducer;
