const fs = require("fs")
const path = require("path")
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin")

const customConfig = {
    module: {
        rules: [
            {
                test: /\.pegjs$/,
                exclude: /node_modules/,
                use: [path.resolve("util/pegjs-grammar-loader.js")]
            }
        ]
    },
    plugins: [
        new MonacoWebpackPlugin()
    ]
}

module.exports = function override(config, env) {
    for (let rule of customConfig.module.rules) {
        config.module.rules.splice(0, 0, rule);
    }
    for (let plugin of customConfig.plugins) {
        config.plugins.push(plugin);
    }
    config.resolve.extensions.push(".pegjs");

    fs.writeFile("temporary-webpack.config.js", JSON.stringify(config, null, 4), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 
    return config;
}