#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Helper function to run shell commands
function run(command) {
  console.log(`> ${command}`);
  try {
    return execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Error executing command: ${command}`);
    process.exit(1);
  }
}

// Read current version from package.json
const packageJsonPath = path.join(__dirname, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const currentVersion = packageJson.version;

console.log(`Current version: ${currentVersion}`);

// Parse version components
const [major, minor, patch] = currentVersion.split('.').map(Number);
const newVersion = `${major}.${minor}.${parseInt(patch) + 1}`;

console.log(`New version will be: ${newVersion}`);

// Ask for confirmation
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question(`Proceed with release of version ${newVersion}? (y/n) `, (answer) => {
  if (answer.toLowerCase() !== 'y') {
    console.log('Release cancelled');
    readline.close();
    process.exit(0);
  }

  readline.close();

  // Update version in package.json
  packageJson.version = newVersion;
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
  console.log(`Updated package.json to version ${newVersion}`);

  // Publish to npm
  console.log('Publishing to npm...');
  run('npm publish --registry=https://registry.npmjs.org/');

  // Git commit and tag
  console.log('Committing changes...');
  run('git add package.json');
  run(`git commit -m "Bump version to ${newVersion}"`);

  console.log('Creating git tag...');
  run(`git tag v${newVersion}`);

  console.log('Pushing to GitHub...');
  run('git push origin main --tags');

  console.log(`\n✅ Successfully released version ${newVersion}!`);
});
