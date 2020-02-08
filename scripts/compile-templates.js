const compileTemplate = require("./compile-template");

module.exports = function compileTemplates() {
    compileTemplate("standard-light-theme");
    compileTemplate("standard-dark-theme");
};
