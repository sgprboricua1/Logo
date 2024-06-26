const inquirer = require('inquirer');
const fs = require('fs');
const {Shape, Circle, Square, Triangle } = require("./lib/shapes")


inquirer
    .prompt([
      {
        type: "input",
        message: "Enter up to three characters",
        name: "text",
      },
      {
        type: "input",
        message: "Enter the text color keyword (OR a hexadecimal number)",
        name: "textColor",
      },
      {
        type: "list",
        message: "Choose the shape of the logo",
        choices: ["Triangle", "Square", "Circle"],
        name: "shape",
      },
      {
        type: "input",
        message: "Enter a shape color keyword (OR a hexadecimal number)",
        name: "shapeBackgroundColor",
      },
    ]);
    function writeToFile(filename, content) {
      fs.writeFile(filename, content, (err) => {
        if (err) {
          console.error("An error has occured");
          return;
        }
        console.log(`Logo created successfully.`);
      });
    }
    
 