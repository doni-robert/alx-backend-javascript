/**
 * Program that takes an input and displays it
 */
console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (chunk) => {
  process.stdout.write(`Your name is: ${chunk}`);
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
