// import { API_URL } from "../Api";

export const ACTION = {
  NAVBARSHOWHIDE: "trueFalse",
  DARK_THEME: "darkTheme",

  CALL_API: "call-api",
  SUCCESS: "success",
  ERROR: "error",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.NAVBARSHOWHIDE:
      return { ...state, navf: action.nav };
    case ACTION.DARK_THEME:
      return { ...state, them: action.them };

    case ACTION.CALL_API: {
      return { ...state, loading: action.loading };
    }
    case ACTION.SUCCESS: {
      return {
        ...state,
        loading: false,
        MoviesDetails: action.data,
        MoviesResults: action.data.results,
        MoviesCurrentPage: action.data.page,
        MovieTotalPage: action.total_pages,
      };
    }
    case ACTION.ERROR: {
      return { ...state, loading: false, error: action.error };
    }
    default:
      return state;
  }
};
