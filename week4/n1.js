const arguments = process.argv.slice(2);
arguments.forEach((argument, index) => {
  console.log(`${index}: ${argument}`);
});