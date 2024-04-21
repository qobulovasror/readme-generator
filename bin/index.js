#! /usr/bin/env node

import process from "node:process";
import readline from "readline/promises";
import chalk from "chalk";
import figlet from "figlet";
import boxen from "boxen";
import makeReadme from "./template.js";
import { writeFileSync } from "fs";
// import yargs from "yargs";

import { againText } from "../defaultParams/params.js";

const log = console.log;
const args = process.argv.slice(2);
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

if (args.length === 0) {
  log(
    chalk.yellow(
      figlet.textSync("MKRM", {
        horizontalLayout: "default",
        font: "Big Money-nw",
      })
    )
  );
  log(chalk.yellow("Welcome to MKRM (make readme) CLI ! 👋" + "\n"));
  log(
    chalk.yellow(
      "Create stunning READMEs for your projects with this program.\n\n"
    )
  );
  // Create a readline interface to handle user input and output
  const projectCon = {};

  //select project type
  await rl
    .question(
      chalk`{bold Enter the project type (m - mobile, b - backend, f - frontend, o - other): }`
    )
    .then((proType) => {
      proType = proType.trim();
      if (
        proType != "m" &&
        proType != "b" &&
        proType != "f" &&
        proType != "o"
      ) {
        log(chalk`{red Invalid project type "${proType}"}${againText}`);
        process.exit(0);
      } else {
        projectCon.type = proType;
      }
    });

  // asking for project name
  await rl
    .question(
      chalk`{bold Enter a project name: (${process.cwd().split("\\").pop()}) }`
    )
    .then((projectName) => {
      // Check that the provided package name is valid
      let regexp = new RegExp(
        /^(?:@[a-z0-9][a-z0-9-]*\/)?[a-z0-9](?:[a-z0-9-]*[a-z0-9])\/?$/i
      );
      if (!regexp.test(projectName) && projectName != "") {
        log(chalk`{red Invalid project name "${projectName}"}${againText}`);
        process.exit(0);
      } else {
        projectCon.name =
          projectName == ""
            ? process.cwd().split("\\").pop()
            : projectName.trim()//.replace( "-", / /g,);
      }
    });

  //asking a project description
  await rl
    .question(chalk`{bold Enter a description for the project 📃: }`)
    .then((desc) => {
      if (desc.length == 0) {
        log(chalk`{red Invalid project description "${desc}"}${againText}`);
        process.exit(0);
      } else {
        projectCon.decrip = desc.trim();
      }
    });

  //get used tools
  await rl
    .question(
      chalk`{bold Enter the technologies or Tools used in the project 🛠️ (ex: Nodejs, Express, MongoDB): }`
    )
    .then((techno) => {
      if (techno) projectCon.techno = techno.split(",");
    });

  //get repo url
  await rl
    .question(chalk`{bold Enter the github URL of project (optional)🔗: }`)
    .then((url) => {
      if (url.length != 0) {
        projectCon.url = url.trim();
      }
    });

  //get license type
  await rl
    .question(chalk`{bold Enter the license type 🪪: (MIT)  }`)
    .then((licen) => {
      if (licen.length == 0) {
        projectCon.licen = "MIT";
      } else {
        projectCon.licen = licen.trim();
      }
    });

  //confirm that everything is correct
  await rl
    .question(chalk`{bold Confirm that everything is correct ✔️: (yes) }`)
    .then((ans) => {
      ans = ans.toLocaleLowerCase();
      if (!(ans.length == 0 || ans == "y" || ans == "yes")) {
        log(
          chalk.red(
            "According to your answer, the README file could not be created"
          )
        );
        process.exit(0);
      }
    });

  // pro type, name, desictip, tools, url , licen
  const fileBody = makeReadme(projectCon);
  writeFileSync(`${process.cwd()}/README.md`, fileBody);
  log(
    boxen(
      `README file created successfully 🎉 \nThe README file is ready for edit 📝 and upload 🚀`,
      {
        padding: 1,
        borderColor: "green",
        align: "center",
        float: "center",
        margin: 1,
        dimensions: { width: 60 },
      }
    )
  );
  rl.close();
} else if (args[2] === "--version" || args[2] === "-v") {
  const version = require("./package").version;
  log(
    boxen(`${figlet.textSync("NPM-Checker", "Doom")} v${version}`, {
      padding: 1,
      borderColor: "yellow",
      align: "center",
      float: "center",
      margin: 1,
      dimensions: { width: 60 },
    })
  );

  const { default: info } = await import("../package.json", {
    assert: {
      type: "json",
    },
  });

  process.exit();
} else if (!args[2]) {
  //   showHelp;
}

// Show the ASCII art NPM logo and ask for the author's name
//   log(boxen(figlet.textSync("NPM-Checker"), {
//     padding: 1,
//     borderColor: "green",
//     align: "left",
//     dimBorder: true,
//     margin: 1,
//   }) + "\n");

//   rl.question(chalk`{cyan Who\'s the author of this project? }\n`, (authorName) => {
//     // Save the data in a JSON file
//     fs.writeFileSync(`./npmchecker_data/${projectName}.json`, JSON.stringify({
//       projectName,
//       authorName,
//     }), () => { });

//     // Run npm check on the created package
//     const childProcess = spawn("npm", ["check"], { cwd: `./npmchecker_data/${projectName}` });

//     // Handle stdout from npm check
//     childProcess.stdout.on("data", (data) => {
//       log(`${data}`);
//     });

//     // Handle stderr from npm check
//     childProcess.stderr.on("data", (data) => {
//       log(chalk`{red ${data}}`);
//     });

//     // Once npm check has finished, remove the data file and show a success message
//     childProcess.on("close", () => {
//       fs.unlinkSync(`./npmchecker_data/${projectName}.json`);
//       log("\n" + chalk`{green Done! You can now analyze the results by opening the generated \`results.html\` file.}`);
//       log("\n" + chalk`{green Done! You can now analyze the results by running \`npm run report\`.`)})
//     })};
//   );

// if (args.sentence == null && args.s == null) {
//   yargs.showHelp;
//   // return;
// }

// if (args.language == null && args.l == null) {
//   console.log(
//     chalk.yellow(figlet.textSync("MyCLI", { horizontalLayout: "full" }))
//   );
//   yargs.showHelp;
// }
// if (args.sentence == null && args.s == null) {
//   yargs.showHelp;
//   // return;
// }

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

// yargs(yargs.argv).command({
//   command: "add",
//   describe: "Adds two number",
//   builder: {
//     firstNumber: {
//       describe: "First Number",
//       demandOption: true, // Required
//       type: "number",
//     },
//     secondNumber: {
//       describe: "Second Number",
//       demandOption: true,
//       type: "number",
//     },
//   },

//   // Function for your command
//   handler(argv) {
//     console.log("Result:", argv.firstNumber + argv.secondNumber);
//   },
// });

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

// const language = argv1.l || argv1.language;

// const sentence = argv1.s || argv1.sentence;

// console.log(
//   "\n" +
//     boxen(chalk.green("sentence" + "\n\n" + "res.text"), {
//       padding: 1,
//       borderColor: "green",
//       dimBorder: true,
//     }) +
//     "\n"
// );
