# 🚀 Smart Utility Toolkit

### 🧪 Lab Assignment 1 – Web Dev III

A simple **Node.js Smart Utility Toolkit** created to practice the fundamentals of backend development using Node.js core modules.

This project demonstrates command-line interaction, custom modules, HTTP server creation, file handling, and random number generation. 🟢

---

## 🛠️ Technologies Used

* 🟢 Node.js
* 🟨 JavaScript (ES6)
* 💻 Terminal / Command Prompt
* ⚙️ Node.js Core Modules:

  * `process`
  * `http`
  * `fs`
  * `crypto`

> 🚫 No external npm packages or frameworks are used.

---

## 📁 Project Structure

```text
Smart-Utility-ToolKit/
│
├── 📄 app.js
├── 📄 calculator.js
├── 📄 server.js
├── 📄 fileManager.js
├── 📄 dice.js
├── 📄 package.json
├── 📄 sample.txt
├── 📄 DiceRollHistory.txt
│
└── 📂 modules/
    ├── 📄 isEven.js
    └── 📄 logger.js
```

---

## 🧮 1. CLI Calculator

`calculator.js` uses **`process.argv`** to take input from the terminal and perform mathematical operations.

### ▶️ Example

```bash
node calculator.js add 10 5
```

### ✨ Operations

* ➕ Addition
* ➖ Subtraction
* ✖️ Multiplication
* ➗ Division
* 🔢 Additional operations implemented in the project

The calculator also handles invalid operations.

---

## 📦 2. Custom Module

The project contains a custom `isEven` module.

The functionality is exported using:

```js
module.exports
```

and imported into another file using:

```js
require()
```

This demonstrates how custom modules can be created and reused in Node.js. 🔄

A reusable logger module is also included as an additional module.

---

## 🌐 3. HTTP Server

`server.js` creates a basic HTTP server using Node.js's built-in **`http` module**.

The server runs on **port 5000**.

### 🛣️ Available Routes

| Route           | Response           |
| --------------- | ------------------ |
| `/`             | 👋 Welcome message |
| `/about`        | ℹ️ About page      |
| `/contact`      | 📞 Contact page    |
| Any other route | ❌ 404 error        |

### ▶️ Start the Server

```bash
node server.js
```

Then open:

```text
http://localhost:5000/
```

The different routes can be tested using a browser or Postman.

---

## 📂 4. File Manager

`fileManager.js` demonstrates file operations using Node.js's built-in **`fs` module**.

### 🔧 Operations

* 📝 **Create** → `writeFile()`
* 📖 **Read** → `readFile()`
* ✏️ **Update** → `appendFile()`
* 🗑️ **Delete** → `unlink()`

The program also displays success and error messages in the terminal.

### ▶️ Run

```bash
node fileManager.js
```

The file operations demonstrate asynchronous file handling in Node.js.

---

## 🎲 5. Random Dice Generator

`dice.js` uses Node.js's built-in **`crypto` module** to generate random dice values from **1 to 6**.

Multiple dice rolls are generated using a loop. 🎲🎲🎲

### ▶️ Run

```bash
node dice.js
```

The project also stores dice-roll history in `DiceRollHistory.txt` as an additional feature. 📜

---

## 🔄 6. Module Reusability

The project demonstrates custom module creation and reuse using:

```js
module.exports
```

and:

```js
require()
```

The custom modules are stored inside the `modules` folder. 📦

---

## 📋 7. Package Configuration

The project includes a `package.json` file for Node.js project configuration.

📌 **No external dependencies are required.**

The project uses only Node.js built-in modules as required by the assignment.

---

## ✅ Assignment Requirements Covered

* 🖥️ CLI calculator using `process.argv`
* 📦 Custom module creation and reuse
* 🌐 HTTP server using `http`
* 🛣️ Multiple HTTP routes
* ❌ 404 handling
* 📝 File creation using `writeFile()`
* 📖 File reading using `readFile()`
* ✏️ File updating using `appendFile()`
* 🗑️ File deletion using `unlink()`
* 🎲 Random dice generation using `crypto`
* 🔄 Multiple dice rolls
* 🖨️ Console logging and execution-flow observation
* ⚡ Asynchronous file operations
* 📜 Dice-roll history as an additional feature

---

## ▶️ How to Run

Make sure **Node.js** is installed on your system. 🟢

Run the programs from the project directory:

```bash
node calculator.js add 10 5
node app.js
node server.js
node fileManager.js
node dice.js
```

For the HTTP server, open:

```text
http://localhost:5000/
```

---

## 🚫 Restrictions Followed

This project does **not** use:

* ❌ Express.js
* ❌ External npm packages
* ❌ Database integration
* ❌ Third-party frameworks

Only Node.js built-in modules are used, following the assignment requirements. ✅

---

## 🎯 Learning Objectives

Through this assignment, the project demonstrates:

* 🧠 How Node.js executes JavaScript outside the browser
* ⌨️ Command-line input using `process.argv`
* 📦 Custom module creation and reuse
* 🌐 Basic HTTP server creation
* 📂 File operations using `fs`
* 🎲 Random number generation using `crypto`
* 🛣️ Basic routing concepts
* 🔄 Modular and reusable coding practices
* 🖨️ Console logging and execution-flow analysis

---

### ⭐ Smart Utility Toolkit

**Built with Node.js Core Modules — Simple, Practical & Modular 🚀**
