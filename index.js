console.log("Hello Boolean ");
console.log(process.argv);
const myWord = process.argv[2] ?? " node";
console.log(`hello${myWord}`);
