// There was a test in your class and you passed it. Congratulations!

// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!

// Note:
// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!

function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  // sum all scores and dividing them by how many total scores there are
  // calculate if your score is higher or lower tha avr
  // use conditional if else or ternary since its only checking true or false

  let sum = 0;
  classPoints.forEach(function (point) {
    sum += point;
  });

  // Calculate the average score of the class
  let avr = sum / classPoints.length;

  // Compare if your points are greater than the average
  if (yourPoints > avr) {
    return true;
  } else {
    return false;
  }
}
