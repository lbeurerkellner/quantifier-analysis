const fs = require("fs");
const path = require("path");

module.exports = function(source) {
    const callback = this.async();

    fs.readFile(this.resourcePath, 'utf-8', function(err, grammarSource) {
        if(err) return callback(err);
        callback(null, `
        const peg = require("pegjs");
        console.log(\`${grammarSource.split("\\").join("\\\\")}\`);
        module.exports = peg.generate(\`${grammarSource.split("\\").join("\\\\")}\`);
        `);
    });
}