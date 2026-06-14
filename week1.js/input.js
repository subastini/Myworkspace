/* const name = process.argv[2]
const age = Number(process.argv[3]) 
console.log(process.argv);


/* console.log("Your name is",name);
console.log("Your age is",age); */
 */


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Enter your namme: ' , (name)=>{
    console.log('hello ${name}' );
    r1.close();
    
})