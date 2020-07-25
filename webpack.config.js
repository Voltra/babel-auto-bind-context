const path = require("path");
const thisPath = __dirname;

this.window = this;

module.exports = {
    target: "node",
    resolve: {
        alias: {
            "@js": path.resolve(thisPath, "src/"),
            "@demo": path.resolve(thisPath, "demos/")
        },
        extensions: [".js"]
    },
    entry: {
        "autoBindContext": "@js/autoBindContext.js",
        "demo.coma": "@demo/collectionManipulation.js"
    },
    output: {
        path: path.resolve(thisPath, "dist"),
        filename: "[name].js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_module|bower_component)s/g,
            use: ["babel-loader"]
        }]
    }
}