#!/usr/bin/env node
const program = require('commander');
const {prompt} = require('inquirer');
const {createFolder} = require('./src/componentGenerator');
const {createHooksFolder} = require('./src/hookComponentGenerator');
const chalk = require('chalk');

program.version('1.0.5').description('react-cg');

const questions = [
  {
    type: 'checkbox',
    name: 'componenttype',
    message: 'select component type',
    choices: ['class', 'hook'],
  },
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
  .description(chalk.yellow('generates component'))
  .action(name => {
    if (name) {
      prompt(questions).then(answers => {
        let types = {
          jstype: answers.jstype[0],
          csstype: answers.csstype[0],
          componenttype: answers.componenttype[0],
        };
        if (types.componenttype === 'class') {
          createFolder(name, types);
        } else {
          createHooksFolder(name, types);
        }
      });
    } else {
      console.log(' argument <name> is required');
    }
  });

program.parse(process.argv);
