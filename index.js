// code your solution here

let record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

   

//need a function called superBowl

function superbowlWin(record) {
 let fuu = record.find(item => item.result === "W")
 if (fuu === undefined)
 {
  return undefined;
 }
 return fuu.year;
    }

