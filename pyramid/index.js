// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides

function pyramid(n) {
  for (let row = 0; row < n; row++) {
    let string = '';
    for (let column = 0; column < n; column++) {
      if (row <= column) {
        string += '#';
      }
    }
  }
}

// --- Examples
console.log(pyramid(1));
//       '#'

console.log(pyramid(2));
//       ' # '
//       '###'

console.log(pyramid(3));
//       '  #  '
//       ' ### '
//       '#####'

// module.exports = pyramid;
