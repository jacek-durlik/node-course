console.log('Starting app.js');

const _ = require('lodash');
const notes = require('./notes.js');
const yargs = require('yargs');
const validator = require('validator');
const chalk = require('chalk');

yargs.version('1.1.0');
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
    console.log(chalk.green.inverse('Success!'));
  }
});

yargs.command({
  command: 'list',
  describe: 'Listing all notes',
  handler(argv) {
    console.log('Listing all notes');
    notes.listNotes();
    console.log(chalk.green.inverse('Success!'));
  }
});

yargs.command({
  command: 'remove',
  describe: 'Removing a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
    console.log(chalk.green.inverse('Success!'));
  }
});

yargs.command({
  command: 'read',
  describe: 'Reading a note',
  builder: {
    title: {
      describe: 'Note title',
    }
  },
  handler(argv) {
    notes.readNote(argv.title);
    console.log(chalk.green.inverse('Success!'));
  }
});


yargs.parse();
