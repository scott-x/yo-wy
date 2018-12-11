'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const cowsay = require('cowsay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    // console.log(cowsay.say({
    //   text : ` ${chalk.red('come')} ${chalk.blue('on')} ${chalk.green('baby')}, let's go....`,
    //   e : "oO",
    //   T : "U "
    // }));
    const prompts = [
      {
        type: 'text',
        name: 'componentName',
        message: 'component name:',
      },
      {
        type: 'confirm',
        name: 'store',
        message: `${chalk.magenta('Would you like to add a store inside your component?')} `,
        default: true
      },
      {
        type: 'confirm',
        name: 'loadable',
        message: `${chalk.magenta('Would you like to separate bundle.js')}`,
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    let filePath=[],time1=new Date().getTime();
    if (this.props.store && !this.props.loadable) {
        //添加标准store
        filePath=[
          {temp:'header/store/index.js',dest:'store/index.js'},
          {temp:'header/store/actionType.js',dest:'store/actionType.js'},
          {temp:'header/store/reducer.js',dest:'store/reducer.js'},
          {temp:'header/store/actionCreators.js',dest:'store/actionCreators.js'}
        ]
        //先copy模版
        this.fs.copyTpl(
          this.templatePath('header/index.js'),
          this.destinationPath(`src/common/${this.props.componentName}/index.js`),
          this.props
        )
         this.fs.copyTpl(
          this.templatePath('header/style.js'),
          this.destinationPath(`src/common/${this.props.componentName}/style.js`),
          this.props
        )
         //copy store
        filePath.forEach(i=>{
          this.fs.copy(
          this.templatePath(i.temp),
          this.destinationPath(`src/common/${this.props.componentName}/${i.dest}`)
        )
        }) 
        let time2=new Date().getTime()
        let time=time2-time1
        console.log(` ${chalk.red(' created')} ${chalk.blue('6')} ${chalk.red(' files in')} ${chalk.blue(time)} ${chalk.red('ms')}`)
        
    }else{
      if (this.props.loadable) {
        filePath=[
          {temp:'detail/store/index.js',dest:'store/index.js'},
          {temp:'detail/store/actionType.js',dest:'store/actionType.js'},
          {temp:'detail/store/reducer.js',dest:'store/reducer.js'},
          {temp:'detail/store/actionCreators.js',dest:'store/actionCreators.js'},
          {temp:'detail/loadable.js',dest:'loadable.js'}
        ]
        //先copy模版
        this.fs.copyTpl(
          this.templatePath('detail/index.js'),
          this.destinationPath(`src/common/${this.props.componentName}/index.js`),
          this.props
        )
         this.fs.copyTpl(
          this.templatePath('detail/style.js'),
          this.destinationPath(`src/common/${this.props.componentName}/style.js`),
          this.props
        )
        filePath.forEach(i=>{
          this.fs.copy(
          this.templatePath(i.temp),
          this.destinationPath(`src/common/${this.props.componentName}/${i.dest}`)
        )
        }) 
        let time2=new Date().getTime()
        let time=time2-time1
          console.log(` ${chalk.red(' created')} ${chalk.blue('7')} ${chalk.red(' files in')} ${chalk.blue(time)} ${chalk.red('ms')}`)

      }else{
        this.fs.copyTpl(
          this.templatePath('home/index.js'),
          this.destinationPath(`src/common/${this.props.componentName}/index.js`),
          this.props
        )
         this.fs.copyTpl(
          this.templatePath('home/style.js'),
          this.destinationPath(`src/common/${this.props.componentName}/style.js`),
          this.props
        )
        let time2=new Date().getTime()
        let time=time2-time1
         console.log(` ${chalk.red(' created')} ${chalk.blue('2')} ${chalk.red(' files in')} ${chalk.blue(time)} ${chalk.red('ms')}`)

      }
    }
  }
};
