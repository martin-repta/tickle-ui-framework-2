const fs = require('fs');
const path = require('path');
const spawn = require('child_process').spawn;
const semver = require('semver');
const cloneDeep = require('lodash.clonedeep');

function createPackageFile() {
  try {
    let packageData = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf8')
    );
    packageData.version = semver.inc(packageData.version, 'patch'); // increase version

    const { scripts, engines, files, devDependencies, ...packageDataOther } = cloneDeep(
      packageData
    );

    delete packageDataOther['lint-staged'];
    // these dependencies will be listed as peer dependencies
    ['react', 'react-dom', '@material-ui/core', '@material-ui/icons', 'formik'].forEach(package => {
      packageDataOther.peerDependencies[package] = packageDataOther.dependencies[package];
      delete packageDataOther.dependencies[package];
    });

    const newPackageData = {
      ...packageDataOther,
      main: './index.js',
      types: './index.d.ts',
      private: false
    };
    const buildPath = path.resolve(__dirname, '../dist/package.json');

    fs.writeFileSync(buildPath, JSON.stringify(newPackageData, null, 2), 'utf8');
    fs.writeFileSync(
      path.resolve(__dirname, '../package.json'),
      JSON.stringify(packageData, null, 2),
      'utf8'
    ); //override also original package.json to increase the version

    console.log(`Created package.json in ${buildPath}`);
  } catch (err) {
    console.error(err.message);
  }
}

createPackageFile();
