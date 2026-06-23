# Notes App CLI

A command-line notes application built with Node.js. It allows you to create, manage, search, archive, and export notes stored locally in a JSON file.

---

## Features

* Add notes
* List notes
* Read a single note
* Update notes
* Delete notes
* Search notes
* Filter notes by tags
* Archive notes
* View archived notes
* Export notes to JSON or TXT
* View note statistics

---

## Project Structure

```text
project/
│
├── app.js
├── notes.json
├── notes-export.json
├── notes-export.txt
└── README.md
```

---

## Data Format

All notes are stored inside `notes.json`.

Example:

```json
[
  {
    "id": 1,
    "title": "Learn Node",
    "content": "Understand EventEmitter",
    "tags": ["backend", "nodejs"],
    "archived": false
  }
]
```

---

# Feature 1: Add Notes

### Command

```bash
node app.js add
```

### Input

```text
Enter Title:
```

Example:

```text
Learn Node
```

```text
Enter Content:
```

Example:

```text
Understand EventEmitter
```

```text
Enter Tags (comma separated):
```

Example:

```text
backend,nodejs
```

### Output

```text
✓ Note added successfully.
```

---

# Feature 2: List Notes

### Command

```bash
node app.js list
```

### Output

```text
1. Learn Node
2. Learn MongoDB
3. Express Middleware
```

Displays all non-archived notes.

---

# Feature 3: Read a Single Note

### Command

```bash
node app.js read 1
```

### Output

```text
Title: Learn Node

Content:
Understand EventEmitter

Tags:
backend,nodejs
```

If the note does not exist:

```text
Note not found.
```

---

# Feature 4: Delete Note

### Command

```bash
node app.js delete 1
```

### Output

```text
✓ Note deleted successfully.
```

If the ID does not exist:

```text
Note not found.
```

---

# Feature 5: Update Note

### Command

```bash
node app.js update 1
```

### Input

```text
New Title:
```

Example:

```text
Learn Advanced Node
```

```text
New Content:
```

Example:

```text
Study EventEmitter deeply
```

```text
New Tags:
```

Example:

```text
backend,nodejs,events
```

### Output

```text
✓ Note updated successfully.
```

---

# Feature 6: Search Notes

Searches in:

* Title
* Content
* Tags

### Command

```bash
node app.js search node
```

### Output

```text
1. Learn Node
3. Node Streams
5. Node Event Loop
```

If nothing matches:

```text
No matching notes found.
```

---

# Feature 7: Filter Notes by Tag

### Command

```bash
node app.js filter backend
```

### Output

```text
1. Learn Node
4. Express Middleware
7. JWT Authentication
```

---

# Feature 8: Archive Notes

Archive notes instead of deleting them permanently.

### Command

```bash
node app.js archive 1
```

### Example

Before:

```json
{
  "archived": false
}
```

After:

```json
{
  "archived": true
}
```

### Output

```text
✓ Note archived successfully.
```

---

# View Archived Notes

### Command

```bash
node app.js archived
```

### Output

```text
Archived Notes:

1. Learn Node
5. Learn Docker
```

---

# Feature 9: Export Notes

## Export JSON

### Command

```bash
node app.js export json
```

Creates:

```text
notes-export.json
```

---

## Export TXT

### Command

```bash
node app.js export txt
```

Creates:

```text
notes-export.txt
```

Example content:

```text
Title: Learn Node
Content: Understand EventEmitter
Tags: backend,nodejs

-------------------
```

### Output

```text
✓ Notes exported successfully.
```

---

# Feature 10: Statistics

### Command

```bash
node app.js stats
```

### Output

```text
Total Notes: 2
Active Notes: 1
Archived Notes: 1
Tags Used: 3
```

Statistics include:

* Total notes
* Active notes
* Archived notes
* Total unique tags

---

# Example User Journey

### Create Notes

```bash
node app.js add
```

### List Notes

```bash
node app.js list
```

### Read a Note

```bash
node app.js read 2
```

### Archive a Note

```bash
node app.js archive 2
```

### Filter Notes

```bash
node app.js filter backend
```

### Export Notes

```bash
node app.js export json
```

### View Statistics

```bash
node app.js stats
```

---

## Technologies Used

* Node.js
* File System Module (`fs`)
* Path Module (`path`)
* Readline Module (`readline`)
* JSON File Storage

---

## Future Improvements

* Restore archived notes
* Sort notes by date
* Pagination
* Colorized console output
* Categories and priorities
* Markdown support
* SQLite or MongoDB integration
* User authentication

---

## License

This project is open-source and available under the MIT License.
