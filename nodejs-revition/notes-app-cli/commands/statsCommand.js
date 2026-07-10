const {readNotes,saveNotes }  = require('../utils/notes');
function showStats(){
    const notes = readNotes();
    
    const tagCount = notes.reduce((acc,curr) => {
         return acc + curr.tags.length;
    },0);

    const activeNotes = notes.reduce((acc,curr) => {
    if(curr.archived == false){
        acc++
    }
       return acc;
   },0);
    const archivedNotes = notes.reduce((acc,curr) => {

    if(curr.archived == true){
        acc++
    }
       return acc;
    },0);

    console.log(`Total Notes    : ${notes.length}`);
    console.log(`Active Notes   : ${activeNotes}` );
    console.log(`Archived Notes : ${archivedNotes}`);
    console.log(`Tags Used      : ${tagCount}`);
    
}
module.exports = showStats;