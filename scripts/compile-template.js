#!/usr/bin/env node
const ltc = require("@lithiumjs/ngx-material-theming/scripts/compile-theme");
const fs = require("fs-extra");

module.exports = function compileTemplate(/** @type {string} */ templateName) {
    const dataBuf = ltc.compileFile(`./templates/${templateName}.scss`);

    fs.writeJSONSync(`./dist/${templateName}.json`, { data: dataBuf.toString("utf8") }, { EOL: ' ' });
};
