const fs = require('fs');
const chalk = require('chalk');

console.log('Starting notes.js');
var addNote = (title, body) => {
  const currentNotes = loadNotes();
  var bookJSON = {
    title: title,
    body: body
  }
  const duplicateNotes = currentNotes.filter((note)=>note.title === bookJSON.title);

  debugger

  if (duplicateNotes.length==0) {
    currentNotes.push(bookJSON);
    console.log(chalk.green('Note is added'))
  } else {
    console.log(chalk.blue('Note alreaddy exists'));
  }

  saveFile(currentNotes);
  console.log('Add note', bookJSON);
};

var readNote = (title) => {
  const currentNote = loadNotes().find((note)=>note.title===title);
  if (currentNote) {
    console.log(currentNote);
  } else {
    console.log(chalk.yellow('No note found'))
  }
};


var removeNote = (title) => {
  console.log(chalk.green('Removing note:',title));
  const currentNotes = loadNotes();
  const leftoverNotes = currentNotes.filter((note)=>note.title !== title);
  if (leftoverNotes.length==currentNotes.length) {
    console.log(chalk.yellow('No note to remove'));
  } else {
    console.log(chalk.green('Note was removed'));
    saveFile(leftoverNotes);
  }
};

var listNotes = () => {
  const currentNotes = loadNotes();
  currentNotes.forEach((note) => {console.log('title', note.title)});
};

var loadNotes = () => {
  try{
    var book = fs.readFileSync('notes.json').toString()
    return JSON.parse(book);
  } catch (e){
    console.log(chalk.yellow('File not found'));
    return [];
  }
};

var saveFile = (JSONtoSave) => fs.writeFileSync('notes.json', JSON.stringify(JSONtoSave));

module.exports = {
  addNote,
  readNote,
  removeNote,
  loadNotes,
  listNotes
};
