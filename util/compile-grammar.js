const fs = require("fs");
const path = require("path");

const args = process.argv;
if (args.length < 4) {
    console.error("USAGE: compile-grammar.js GRAMMAR_FILE OUTPUT_DIR");
    process.exit(0);
}

const grammarFile = args[2];
const outputDirectory = args[3];

fs.readFile(grammarFile, 'utf-8', function(err, grammarSource) {
    if(err)  {
        console.error(err);
        return;
    }
    const contents = `
    const peg = require("pegjs");
    module.exports = peg.generate(\`${grammarSource.split("\\").join("\\\\")}\`);
    `;

    fs.writeFile(outputDirectory + "/" + path.basename(grammarFile), contents, function(err) {
        if(err) {
            return console.log(err);
        }
    }); 
});