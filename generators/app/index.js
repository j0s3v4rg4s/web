'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the magnificent ' + chalk.red('express typescript') + ' generator!'
    ));

    const prompts = [{
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: this.appname
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {

    // this.directory('src', 'src');

    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath(this.props.name+'/package.json'), {
        name: this.props.name
      }
    );

    this.fs.copy(
      this.templatePath('_.gitignore'),
      this.destinationPath(this.props.name+'/.gitignore')
    );

    this.fs.copy(
      this.templatePath('src'),
      this.destinationPath(this.props.name+'/src')
    );

    this.fs.copy(
      this.templatePath('_vscode/launch.json'),
      this.destinationPath(this.props.name+'/.vscode/launch.json')
    );

    this.fs.copy(
      this.templatePath('_vscode/tasks.json'),
      this.destinationPath(this.props.name+'/.vscode/tasks.json')
    );

  }

  install() {
    this.installDependencies({bower: false});
  }
};
