import { GET_ROSTERS } from "./types"
import {
    BASE_URL,
    ERROR
  } from "../../extras/constants";
import axios from "axios";

export const getRosters = (team_id1,team_id2, game_type) => {

    return function (dispatch) {
      // console.log('====================================');
      // console.log("team_id1 ", team_id1);
      // console.log("team_id2 ", team_id2);
      // console.log("game_type ", game_type);

      // console.log('====================================');
        axios.get(`${BASE_URL}/rosters/${team_id1}/${team_id2}?game_type=${game_type}`)
        .then((response) => {
          let data = response.data;
          // console.log('res get roster redux',data);
 
          dispatch({
            type: GET_ROSTERS,
            payload: data,
          });
        })
        .catch((err) => {
            // console.log("roster error => " , err);
        });
   
    };
  };