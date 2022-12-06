export const sort_points_table = (arr) => {
    return arr
      .sort((a, b) => parseFloat(a.score) - parseFloat(b.score))
      .reverse();
  };

export const sort_match_points = (obj) => {
    let arr = [];
    for(let o in obj){
      arr.push(obj[o]);
    }
    return arr
      .sort((a, b) => parseFloat(a.points) - parseFloat(b.points))
      .reverse();
  };
  