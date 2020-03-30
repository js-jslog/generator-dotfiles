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
    const pkgJson = {
      name: 'basic-jslog-project',
      version: '0.1.0',
      description: 'A basic project with only the essentials which all jslog projects require',
      private: true,
      author: 'js-jslog <josephsinfield@yahoo.com>',
      license: 'UNLICENSED',
      scripts: {
        test: '"echo "Error: no test specified" && exit 1',
        postinstall: 'npx eslint --init'
      },
      devDependencies: {
        eslint: '^6.8.0'
      },
    };

    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
        
    this.copyTemplateFiles();
    this.config.save();
  }

  install() {
    this.npmInstall();
  }
};
