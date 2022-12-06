import AsyncStorage from "@react-native-async-storage/async-storage";


// checks if we have a token and it is not expired

// gets the token or return null and also makes sure if the token is valid
export const getToken = async () => {
  AsyncStorage.getItem("access_token_klutchh").then((token) => {
    if (token) {
      return token;
    } else {
      removeTokens();
      return null;
    }
  });
};

// fn to remove tokens
export const removeTokens = () => {
  AsyncStorage.removeItem("access_token_klutchh");
  AsyncStorage.removeItem("refresh_token_klutchh");
};

export function dateFormat(date) {
  const today = new Date(date);
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  return dd + "/" + mm + "/" + yyyy;
}

export function timeFormat(date) {
  const today = new Date(date);
  let hh = today.getHours();
  let mm = today.getMinutes();

  if (hh < 10) hh = "0" + hh;
  if (mm < 10) mm = "0" + mm;

  return hh + ":" + mm;
}

export function isGroupType(gameType) {
  return gameType === "BGMI" || gameType === "FREEFIRE";
}

export function gameType(gameType) {
  if(gameType === "BGMI" || gameType === "FREEFIRE"){
    return true
  }else{
    return false
  }
}

export const CalcTime = (match_start) => {
  var result="";
  let diffTime = new Date(match_start).valueOf() - new Date().valueOf();
  let absDiffTime = Math.abs(new Date(match_start).valueOf() - new Date().valueOf());
  let days = absDiffTime/ (24*60*60*1000);
  let hours = (days % 1) * 24;
  let minutes = (hours % 1) * 60;
  let secs = (minutes % 1) * 60;
  [days, hours, minutes, secs] = [Math.floor(days), Math.floor(hours), Math.floor(minutes), Math.floor(secs)];
  if (diffTime > 0) {
    if (days > 0) {
      result += days;
      result = result + "D : " + hours + "H : " + minutes + "M";
    } else {
      result += hours + "H : " + minutes + "M";
    }
  } else {
    result = "ZZZ";
  }
  return result;
};


// Calculate Time left for the start of tournament
// export const CalcTime = (match_start) => {
//   var result = "";
//   // For Getting Current time details
//   var current_values = new Date();
//   var start_date = Number(match_start?.substring(8, 10));
//   var start_month = Number(match_start?.substring(5, 7));
//   var start_hour = Number(match_start?.substring(11, 13));
//   var start_minute = Number(match_start?.substring(14, 16));
//   // Setting the api date in the standard format
//   var strt_dt = new Date(
//     Number(match_start?.substring(0, 4)),
//     start_month - 1,
//     start_date,
//     start_hour,
//     start_minute,
//     0,
//     0
//   );
//   // Calculating Time diff
//   var diff = strt_dt - current_values;
//   if (diff > 0) {
//     // Calculating specific time diffs
//     var DD = Math.floor(diff / (1000 * 60 * 60 * 24));
//     diff -= DD * (1000 * 60 * 60 * 24);
//     var HH = Math.floor(diff / (1000 * 60 * 60));
//     diff -= HH * (1000 * 60 * 60);
//     var MM = Math.floor(diff / (1000 * 60));
//     // checking whether match is beyond a day
//     if (DD > 0) {
//       result += DD;
//       result = result + "D : " + HH + "H : " + MM + "M";
//     } else {
//       result += HH + "H : " + MM + "M";
//     }
//   } else {
//     result = "ZZZ";
//   }
//   return result;
// };

export const sortTournaments = (tournaments) => {
  let nextMatch = Number.POSITIVE_INFINITY;
  let presentDate = new Date();
  function allCompleted(tour) {
    let is = true;
    tour.matches.forEach((e) => {
      if (e?.status === "ACTIVE") is = false;
    });
    return is;
  }
  let sortedTournaments = [];
  if (tournaments.length === 0) {
    return sortedTournaments;
  } else {
    tournaments = tournaments.filter((tournament) => {
      return allCompleted(tournament) === false;
    })
    const get_next = (matches) => {
      if (matches.length === 0) {
        nextMatch = -1;
      }
      matches.forEach((match) => {
        let startsIn = (new Date(match.starts_at.split('.')[0]) - presentDate) / (1000 * 60);
        if (match.status === "ACTIVE" && startsIn < 0) {
          ////console.log(`${match.name} Starts ${startsIn}`)
          nextMatch = Number(startsIn);
        } else if (match.status === "ACTIVE" && startsIn > 0) {
          ////console.log(`${match.name} Starts ${startsIn}`)
          nextMatch = Number(startsIn);
        }
      })
    }
    tournaments.forEach((tournament) => {
      get_next(tournament.matches);
      // ////console.log("NEXTMATCH", nextMatch)
      if(nextMatch !== -1) {
        tournament['nextMatch'] = nextMatch;
        sortedTournaments.push(tournament);
      } else {
        sortedTournaments.push(tournament)
      }
    })
    sortedTournaments.sort((a,b) => {
      if (a.nextMatch && b.nextMatch) {
        return a.nextMatch - b.nextMatch;
      } else {
        return 0
      }
    })
    ////console.log("SORTED", sortedTournaments)
    return sortedTournaments;
  }
}

export const sortedMatchesByTime = (matches, isMatchArray) => {
  // console.log("matches =len => ", matches.length);
  // console.log("sort matches => ", matches);

  var sortedMatches

  var final_obj = [];

  matches.map((match) => {
    console.log("sort matche => ", match.matches);

    var new_matches = match.matches

  

    sortedMatches =
    new_matches?.length === 0
      ? []
      : new_matches?.sort((a, b) => {
          return new Date(a?.starts_at) - new Date(b?.starts_at)
    });

    final_obj.push(sortedMatches)
  })

  console.log("final_obj ==  => ", final_obj);
  
  return final_obj;
};

export const sortedMatchesByStartingTime = (matches, isMatchArray) => {
  
  let sortedMatches =
    matches?.length === 0
      ? []
      : matches?.sort((a, b) => {
          return isMatchArray
            ? new Date(a?.starts_at) - new Date(b?.starts_at)
            : new Date(b?.match_id?.starts_at) - new Date(a?.match_id?.starts_at);
        });
  return sortedMatches;
};

// function to return array of objects with details of team members chosen by the user
export const findSelectedTeam = (selected, teams) => {
  console.log('====================================');
  console.log("teams  => ", teams);
  console.log('====================================');
  var result = [];
  for (var i = 0; i < teams[0].team_members.length; ++i) {
    if (selected.includes(teams[0].team_members[i]._id)) {
      result.push(teams[0].team_members[i]);
    }
  }
  for (i = 0; i < teams[1].team_members.length; ++i) {
    if (selected.includes(teams[1].team_members[i]._id)) {
      result.push(teams[1].team_members[i]);
    }
  }
  return result;
};

// To check and correct the player names
export const correctName = (name) => {
  if (name.includes("'")) {
    return name.substring(name.indexOf("'") + 1, name.lastIndexOf("'"));
  } else return name;
};

export const showToast = ({ type = "success", text1 = "", text2 = "" }) => {
 
};
