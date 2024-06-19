#!/usr/bin/node

const fs = require('fs');

const inputFile1 = process.argv[2];
const inputFile2 = process.argv[3];
const outputFile = process.argv[4];

fs.readFile(inputFile1, 'utf8', (err1, data1) => {
  if (err1) {
    console.error(`Error reading file ${inputFile1}: ${err1}`);
    return;
  }

  fs.readFile(inputFile2, 'utf8', (err2, data2) => {
    if (err2) {
      console.error(`Error reading file ${inputFile2}: ${err2}`);
      return;
    }

    fs.writeFile(outputFile, data1 + data2, (err3) => {
      if (err3) {
        console.error(`Error writing file ${outputFile}: ${err3}`);
        return;
      }

      console.log(`File ${outputFile} created successfully.`);
    });
  });
});