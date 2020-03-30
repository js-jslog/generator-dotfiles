const fs = require('fs');
const _ = require('lodash');

module.exports = (augmentations, packageJsonPath) => {
  if (!augmentations) return

  const existingPackageJsonContent = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  const newPackageJsonContent = _.merge(existingPackageJsonContent, augmentations);

  fs.writeFileSync(packageJsonPath, JSON.stringify(newPackageJsonContent, null, 4));
};
