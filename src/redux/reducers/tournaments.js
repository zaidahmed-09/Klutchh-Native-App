import { GET_ROSTERS } from "../actions/types";
const initState = {
  rosters: null
};
const tournamentReducer = (state = initState, action) => {
  //// // console.log('in tourni reducer',state,action.payload);
  switch (action.type) {
    case GET_ROSTERS:
      return {
        ...state,
        rosters: action.payload
      };
    default:
      return state;
  }
};
export default tournamentReducer;