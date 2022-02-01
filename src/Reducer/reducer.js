export const ACTION = {
  NAVBARSHOWHIDE: "trueFalse",
  DARK_THEME: "darkTheme"
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.NAVBARSHOWHIDE:
      return (state = {...state, navf: action.nav});
    case ACTION.DARK_THEME:
      return (state = {...state,them: action.them});
    default:
      return state;
  }
};
