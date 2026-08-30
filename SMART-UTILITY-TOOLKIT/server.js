// creating a server using http module

// importing the http module 
const http = require("http");

// creating a server
const server = http.createServer((req, res) => {

  if (req.url === "/") {
    // if the route is "/" i.e. home route then the welcome message will appear
    res.writeHead(200, { "content-type": "text/html" });
    res.end(`
            <h1 style='color:blue'> Welcome to my http server !! </h1>
            `);
    console.log("Welcome to my http server !!");

  } else if (req.url === "/about") {
    // if the route is "/about" then the about page will appear and with a corresponding message
    res.writeHead(200, { "content-type": "text/html" });
    res.end(`
            <h1 style='color:red'>About Page</h1>
            <p> Hi, My name is Manpreet Kaur. I am from Jalandhar, Punjab 
            </br> I am currently doing B.Tech CSE Core from 
            </br> 
            K.R. Mangalam University,
            Gurugram, Haryana 
            </p>
            `);
    console.log("About Page");
    console.log(
      "Hi, My name is Manpreet Kaur. I am from Jalandhar, Punjab . I am currently doing B.Tech CSE Core from K.R. Mangalam University, Gurugram, Haryana ",
    );

  } else if (req.url === "/contact") {
    // if the route is "/contact" then the contact page will appear with the corresponding message
    res.writeHead(200, { "content-type": "text/html" });
    res.end(`
            <h1 style='color:green'>Contact Page</h1>
            <p> Mobile Number : +91-1234567890
            </br> Email : abc@gmail.com
            </p>
            `);
    console.log("Contact Page");
    console.log("Mobile Number : +91-1234567890 ,Email : abc@gmail.com");

  } else {
    // handling the routes that doesnot exist with error message
    res.writeHead(404, { "content-type": "text/html" });
    res.end(`
            <h1 style='color:red'>404 : Not Found Error !!</h1>
            `);
    console.log("404 : Not Found Error !!");
  }
});

// running the server
server.listen(5000, () => {
  console.log("Server is running !!");
});

// to run the code run the following command :
// node server.js
// and open postman or any browser to test different routes 