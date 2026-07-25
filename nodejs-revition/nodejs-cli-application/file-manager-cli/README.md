# 📁 File Manager CLI

A command-line application built with **Node.js** that allows users to manage files and directories directly from the terminal. This project is designed to strengthen your understanding of Node.js core modules such as `fs`, `path`, and process arguments while building a practical developer tool.

---

# 🎯 Project Goal

Build a professional File Manager CLI capable of performing common file system operations such as creating, reading, deleting, renaming, copying, moving files, and managing directories.

---

# 📚 Learning Objectives

After completing this project, you should be comfortable with:

* File System (`fs`) module
* Path (`path`) module
* Command-line arguments (`process.argv`)
* File and directory manipulation
* Error handling
* Input validation
* Modular project structure
* Synchronous and asynchronous file operations

---

# 🚀 Features

## 1. List Files and Folders

### Command

```bash
node app.js list
```

### Description

Displays all files and folders in the current directory.

### Example Output

```text
📄 notes.txt
📄 resume.pdf
📁 images
📁 projects
📄 todo.md
```

### Skills Learned

* `fs.readdir()`
* `fs.readdirSync()`

---

## 2. Create a File

### Command

```bash
node app.js create notes.txt
```

### Description

Creates a new empty file.

If the file already exists, display an error message.

### Success Output

```text
✓ File created successfully.
```

### Error Output

```text
File already exists.
```

### Skills Learned

* `fs.writeFile()`
* File existence validation

---

## 3. Read File

### Command

```bash
node app.js read notes.txt
```

### Description

Displays the contents of a file.

### Example Output

```text
Today I learned Node.js.
```

### Error Output

```text
File not found.
```

### Skills Learned

* `fs.readFile()`

---

## 4. Delete File

### Command

```bash
node app.js delete notes.txt
```

### Description

Deletes the specified file.

### Success Output

```text
✓ File deleted successfully.
```

### Error Output

```text
File not found.
```

### Skills Learned

* `fs.unlink()`

---

## 5. Rename File

### Command

```bash
node app.js rename notes.txt diary.txt
```

### Description

Renames an existing file.

### Success Output

```text
✓ File renamed successfully.
```

### Error Output

```text
Source file not found.
```

### Skills Learned

* `fs.rename()`

---

## 6. Copy File

### Command

```bash
node app.js copy notes.txt backup.txt
```

### Description

Creates a duplicate of an existing file.

### Success Output

```text
✓ File copied successfully.
```

### Skills Learned

* `fs.copyFile()`

---

## 7. Move File

### Command

```bash
node app.js move notes.txt ./archive/
```

### Description

Moves a file from one location to another.

### Success Output

```text
✓ File moved successfully.
```

### Skills Learned

* `fs.rename()`
* Path manipulation

---

## 8. Create Directory

### Command

```bash
node app.js mkdir projects
```

### Description

Creates a new folder.

### Success Output

```text
✓ Directory created successfully.
```

### Skills Learned

* `fs.mkdir()`

---

## 9. Delete Directory

### Command

```bash
node app.js rmdir projects
```

### Description

Deletes an empty directory.

### Success Output

```text
✓ Directory deleted successfully.
```

### Skills Learned

* `fs.rmdir()`
* `fs.rm()`

---

## 10. Show File Information

### Command

```bash
node app.js info notes.txt
```

### Description

Displays detailed information about a file.

### Example Output

```text
Name: notes.txt
Size: 2 KB
Created: 23 Jul 2026
Modified: 24 Jul 2026
Is File: true
Is Directory: false
```

### Skills Learned

* `fs.stat()`

---

## 11. Search Files

### Command

```bash
node app.js search node
```

### Description

Searches for files whose names contain the given keyword.

### Example Output

```text
node-guide.txt
node-project.zip
learn-node.pdf
```

### Error Output

```text
No matching files found.
```

### Skills Learned

* Array filtering
* String searching

---

## 12. Display Directory Tree (Bonus)

### Command

```bash
node app.js tree
```

### Description

Displays the directory structure in a tree format.

### Example Output

```text
project/
│
├── src/
│   ├── app.js
│   ├── commands/
│   └── utils/
│
├── package.json
├── README.md
└── .gitignore
```

### Skills Learned

* Recursion
* Directory traversal

---

## 13. Show Current Working Directory

### Command

```bash
node app.js pwd
```

### Description

Displays the current working directory.

### Example Output

```text
/home/thayub/file-manager
```

### Skills Learned

* `process.cwd()`

---

# 🗂 Suggested Folder Structure

```text
file-manager-cli/
│
├── src/
│   ├── app.js
│   ├── commands/
│   │   ├── createCommand.js
│   │   ├── readCommand.js
│   │   ├── deleteCommand.js
│   │   ├── renameCommand.js
│   │   ├── copyCommand.js
│   │   ├── moveCommand.js
│   │   ├── listCommand.js
│   │   ├── mkdirCommand.js
│   │   ├── rmdirCommand.js
│   │   ├── infoCommand.js
│   │   ├── searchCommand.js
│   │   ├── treeCommand.js
│   │   └── pwdCommand.js
│   │
│   ├── utils/
│   │   ├── validator.js
│   │   ├── fileUtils.js
│   │   └── pathUtils.js
│   │
│   └── constants/
│       ├── commands.js
│       └── messages.js
│
├── tests/
├── README.md
├── package.json
└── .gitignore
```

---

# ✅ Recommended Development Order

1. List Files
2. Create File
3. Read File
4. Delete File
5. Rename File
6. Copy File
7. Move File
8. Create Directory
9. Delete Directory
10. File Information
11. Search Files
12. Directory Tree
13. Current Working Directory
14. Change Working Directory

---

# 💡 What You'll Learn

By completing this project, you'll gain practical experience with:

* File system operations
* Directory management
* Command-line applications
* Error handling
* Input validation
* Path manipulation
* Modular code organization
* Production-style project structure

This project provides a strong foundation before moving on to building HTTP servers with Node.js and later developing REST APIs using Express.js.
