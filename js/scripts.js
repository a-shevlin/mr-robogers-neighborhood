function inputArray(input) {
  const array = [];
  for (let i = 0; i <= input; i++) {
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
    } else if (number.includes(2)) {
      roboArray.push("Boop!")
    } else if (number.includes(1)) {
      roboArray.push("Beep!")
    } else {
      roboArray.push(number);
    }
  });
  return roboArray;
}

$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    const input = $("input#number").val();
    const output = inputRobo(input);
    let stringOut = output.forEach(function(element){
      output.push(number + " ");
    });

    // $("#input").hide();
    // $("#result").show(1000);
    // $("#user1").append(input);
  });
})