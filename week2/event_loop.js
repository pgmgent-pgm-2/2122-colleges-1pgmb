// Blocking function
function task (message) {
  let n = 1000000000;
  while (n > 0) {
    n--;
  }
  console.log(message);
}
console.log('Start script...');
// task('Downloaded a file.'); // Synchronous execution
setTimeout(() => {
  task('Downloaded a file.');
}, 1000);
console.log('Done!');