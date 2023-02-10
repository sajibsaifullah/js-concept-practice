function gpaConvert(marks) {
  if (marks >= 100) {
    console.log("Your result is not correct");
  } else if (marks >= 80) {
    console.log("Your GPA is: A+");
  } else if (marks >= 70) {
    console.log("Your GPA is: A");
  } else if (marks >= 60) {
    console.log("Your GPA is: A-");
  } else if (marks >= 50) {
    console.log("Your GPA is: B");
  } else if (marks >= 40) {
    console.log("Your GPA is: C");
  } else if (marks >= 33) {
    console.log("Your GPA is: D");
  } else {
    console.log("Your result is FAIL");
  }
}

let getMarks = 90;
gpaConvert(getMarks);
