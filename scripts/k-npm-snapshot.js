#!/usr/bin/env node

import { spawn } from "child_process";
import path from "path";
import fs from "fs";

function getPkg() {
  try {
    return JSON.parse(
      fs.readFileSync(path.resolve(process.cwd()+"/packages/ketchup", "package.json"))
    );
  } catch (e) {
    process.stderr.write("Could not open a package.json.", e);
    process.exit(1);
  }
}

function getCurrentVersion() {
  return getPkg().version;
}

const oldVersion = getCurrentVersion() ?? error("No version in package.json found.");
const version = oldVersion.replace(/-SNAPSHOT$/, `-SNAPSHOT.${new Date().toISOString().replace(/[-:TZ]/g, "")}`);
console.log("Ketchup version:",version);
const npm = spawn(/^win/.test(process.platform) ? "npm.cmd" : "npm", [
  "--no-git-tag-version",
  "version",
  version,
]); 
npm.stdout.pipe(process.stdout);
npm.stderr.pipe(process.stderr);