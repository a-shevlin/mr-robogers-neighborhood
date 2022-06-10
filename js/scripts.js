function inputArray(input) {
  const array = [];
  for (i = 0; i <= input; i++) {
    array.push(i);
  }
  const stringArray = array.toString().split(",");
  return stringArray;
}

function inputRobo(input) {
  const stringArray = inputArray(input);
  const roboArray = [];
  stringArray.forEach(function(number) {
    if (number.includes(3)) {
      roboArray.push("Won't you be my neighbor.?")
    } else {
      roboArray.push(number);
    }
  });
  return roboArray;
}