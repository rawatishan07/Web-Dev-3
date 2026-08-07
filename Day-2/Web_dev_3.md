## What is REST API?
<b>REST API</b> is a convection based on http through which we an create, read and update

## Creating Node Module
- Create a file by any name you want of extension `.js`
- Download `node.js` from browser and then in the terminal type node app.js to view console output in the terminal<br>
<img src="Images\Img_1.JPG" height='50px'>
- In the terminal write `npm init`. This utility will walk you through creating a package.json file.
- In that fill *Package name, version(Auto filled), description, entry point(Your `.js` file), author, license(Auto filled), type(Auto Filled)*, then type y or yes in the terminal.
- Then a `package.json` file will be created and in that add `"div" : "node [file name].js" `
- Then in the terminal add `npm install -g nodemon` and after that change the package.json line to `"div": "nodemon [file name].js"`<br>
<img src="Images\Img_2.JPG"><br>
*nodemon is a tool that helps develop Node. js based applications by automatically restarting the node application when file changes in the directory are detected.*