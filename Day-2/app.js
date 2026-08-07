// import chalk from 'chalk'
// console.log(chalk.red("Hello World"))
// const Countries = require('./Data/Data_01.js')
// console.log(chalk.red(Countries))

// const os = require('os')
// const userinfo = os.userInfo()
// const platform = os.platform()
// const architecture = os.arch()
// const uptime = os.uptime()
// console.log(uptime)
// console.log(platform)
// console.log(architecture)
// console.log(userinfo)

// const fs = require('fs')
// fs.writeFileSync('Data/data.txt', 'Hello World')

// const path = require('path')
// const filePath = path.join(__dirname, 'data', 'data.txt')
// console.log(filePath)

// const process = require('process')
// console.log(process.argv)
// console.log(process.argv[2])

require('dotenv').config()
console.log(process.env.PORT)
