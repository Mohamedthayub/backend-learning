const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "notes.json");

function readNotes() {
    try {
        const data = fs.readFileSync(filePath, "utf8");
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
}

function saveNotes(notes) {
    fs.writeFileSync(filePath, JSON.stringify(notes, null, 2));
}

module.exports = {
    readNotes,
    saveNotes
};