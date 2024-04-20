#! /usr/bin/env node
import boxen from 'boxen'
import chalk from 'chalk'
import figlet from 'figlet'
import yargs from 'yargs'
import process from 'node:process';

// const version = require('../package.json').version

// const log = console.log;

// const usage = chalk.keyword('violet')("\nUsage: makerm -l <language>  -s <sentence> \n"
// + boxen(chalk.green("\n" + "Translates a sentence to specific language" + "\n"), {padding: 1, borderColor: 'green', dimBorder: true}) + "\n");
// const options = yargs
//       .usage(usage)
//       .option("l", {alias:"language", describe: "Translate to language", type: "string", demandOption: false })
//       .option("s", {alias:"sentence", describe: "Sentence to be translated", type: "string", demandOption: false })
//       .help(true)
//       .argv;


// yargs(process.argv.slice(2)).command({
//   command: "add",
//   description: "Add notes",
//   handler: function(){
//   console.log("we are adding a note ")
//   }
//   })


yargs(yargs.argv).command({ 
  command: 'add', 
  describe: 'Adds two number', 
  builder: { 
      firstNumber: { 
          describe: 'First Number', 
          demandOption: true,  // Required 
          type: 'number'     
      }, 
      secondNumber: {   
          describe: 'Second Number', 
          demandOption: true, 
          type: 'number'
      } 
  }, 

  // Function for your command 
  handler(argv) { 
      console.log("Result:",  
          (argv.firstNumber+argv.secondNumber)) 
  } 
}) 



// yargs(process.argv.slice(2))
//   .scriptName("pirate-parser")
//   .usage('$0 <cmd> [args]')
//   .command('hello [name]', 'welcome ter yargs!', (yargs) => {
//     yargs.positional('name', {
//       type: 'string',
//       default: 'Cambi',
//       describe: 'the name to say hello to'
//     })
//   }, (argv) => {
//     console.log('hello', argv.name, 'welcome to yargs!')
//   })
//   .help()
//   .argv



// console.log(version(process.platform).split('\n')[0]);


const argv1 = process.argv.slice(2);

if(argv1.language == null && argv1.l == null){
    console.log(
        chalk.yellow(
          figlet.textSync('MyCLI', { horizontalLayout: 'full' })
        )
      );
    yargs.showHelp;
}
if(argv1.sentence == null && argv1.s == null){
    yargs.showHelp;
    // return;
}

const language =  argv1.l  || argv1.language;

const sentence =  argv1.s  || argv1.sentence;

console.log("\n" + boxen(chalk.green( "sentence" + "\n\n" + "res.text" ), {padding: 1, borderColor: 'green', dimBorder: true}) + "\n");
