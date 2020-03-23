const Generator = require('yeoman-generator');

const MyBase = class extends Generator {
  copyTemplateFiles() {
    // Copy all dotfiles
    this.fs.copy(
      this.templatePath('.*'),
      this.destinationRoot()
    );
  };
};

module.exports = class extends MyBase {
  writing() {
    this.copyTemplateFiles();
    this.config.save();
  }
};

