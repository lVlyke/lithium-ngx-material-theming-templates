#!/usr/bin/env node
"use strict";

const fs = require("fs-extra");
const path = require("path");
const compileTemplates = require("./compile-templates");

const INJECTED_FILES = {
    "README.md": "./README.md",
    "LICENSE": "./LICENSE",
    "package.json": "./package.json"
};

const BUILD_DIR = "./dist";

(function main() {
    fs.removeSync(BUILD_DIR);
    fs.mkdirSync(BUILD_DIR);

    compileTemplates();

    for (let injectedFileName in INJECTED_FILES) {
        fs.copy(INJECTED_FILES[injectedFileName], path.join(BUILD_DIR, injectedFileName));
    }
})();
