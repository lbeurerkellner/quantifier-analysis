const fs = require("fs")
const path = require("path")

const customConfig = {
    module: {
        rules: [
            {
                test: /\.pegjs$/,
                exclude: /node_modules/,
                use: [path.resolve("util/pegjs-grammar-loader.js")]
            }
        ]
    }
}

module.exports = function override(config, env) {
    for (let rule of customConfig.module.rules) {
        config.module.rules.splice(0, 0, rule);
    }
    config.resolve.extensions.push(".pegjs");

    fs.writeFile("config.js", JSON.stringify(config, null, 4), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 
    return config;
}