// function
const guess = (num) => {
  num % 2 === 0
    ? console.log(`${num} adalah bilangan genap (even)`)
    : console.log(`${num} adalah bilangan ganjil (odd)`);
};

// testing
// terminsal, node main
guess(2);
guess(3);
guess(4);
guess(5);

// output
// 2 adalah bilangan genap (even)
// 3 adalah bilangan ganjil (odd)
// 4 adalah bilangan genap (even)
// 5 adalah bilangan ganjil (odd)