#!/usr/bin/env node
const program = require('commander');
const {prompt} = require('inquirer');
const chalk = require('chalk');
const {createFolder} = require('./src/componentGenerator');

program.version('1.0.0').description('rgc');

const questions = [
  {
    type: 'checkbox',
    name: 'jstype',
    message: 'select js type',
    choices: ['js', 'jsx'],
  },
  {
    type: 'checkbox',
    name: 'csstype',
    message: 'Select css type',
    choices: ['css', 'scss', 'sass'],
  },
];

program
  .command('generate <name>')
  .alias('g')
  .description(chalk.blue('generate component'))
  .action(name => {
    if (name) {
      prompt(questions).then(answers => {
        let types = {
          jstype: answers.jstype[0],
          csstype: answers.csstype[0],
        };
        createFolder(name, types);
      });
    } else {
      console.log(' argument <name> is required');
    }
  });

program.parse(process.argv);
