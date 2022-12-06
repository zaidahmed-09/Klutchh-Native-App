// export const CalcTime = (match_start) => {
//     var result = '';
//     // For Getting Current time details
//     var current_values = new Date();
//     var start_date = Number(match_start?.substring(8, 10));
//     var start_month = Number(match_start?.substring(5, 7));
//     var start_hour = Number(match_start?.substring(11, 13));
//     var start_minute = Number(match_start?.substring(14, 16));
//     // Setting the api date in the standard format
//     var strt_dt = new Date(
//       Number(match_start?.substring(0, 4)),
//       start_month - 1,
//       start_date,
//       start_hour,
//       start_minute,
//       0,
//       0
//     );
//     // Calculating Time diff
//     var diff = strt_dt - current_values;
//     if (diff > 0) {
//       // Calculating specific time diffs
//       var DD = Math.floor(diff / (1000 * 60 * 60 * 24));
//       diff -= DD * (1000 * 60 * 60 * 24);
//       var HH = Math.floor(diff / (1000 * 60 * 60));
//       diff -= HH * (1000 * 60 * 60);
//       var MM = Math.floor(diff / (1000 * 60));
//       // checking whether match is beyond a day
//       if (DD > 0) {
//         result += DD;
//         result = result + 'D : ' + HH + 'H : ' + MM + 'M';
//       } else {
//         result += HH + 'H : ' + MM + 'M';
//       }
//     } else {
//       result = 'ZZZ';
//     }
//     return result;
//   };
  

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