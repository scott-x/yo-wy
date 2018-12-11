'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const cowsay = require('cowsay');

module.exports = class extends Generator {
  initializing(){
   
  }
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
        name: 'projectName',
        message: `${chalk.green('Project Name:')}`,
        default: 'myApp'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }
  end(){
    
  }
  writing() {
    
    const filePath=[
      {temp:'yarn.lock',dest:'yarn.lock'},
      {temp:'_gitignore',dest:'.gitignore'},
      {temp:'public/favicon.ico',dest:'public/favicon.ico'},
      {temp:'public/index.html',dest:'public/index.html'},
      {temp:'public/manifest.json',dest:'public/manifest.json'},
      {temp:'public/api/detail.json',dest:'public/api/detail.json'},
      {temp:'src/index.js',dest:'src/index.js'},
      {temp:'src/App.js',dest:'src/App.js'},
      {temp:'src/style.js',dest:'src/style.js'},
      {temp:'src/store/index.js',dest:'src/store/index.js'},
      {temp:'src/store/reducer.js',dest:'src/store/reducer.js'},
      {temp:'src/statics/font/iconfont.eot',dest:'src/statics/font/iconfont.eot'},
      {temp:'src/statics/font/iconfont.js',dest:'src/statics/font/iconfont.js'},
      {temp:'src/statics/font/iconfont.svg',dest:'src/statics/font/iconfont.svg'},
      {temp:'src/statics/font/iconfont.ttf',dest:'src/statics/font/iconfont.ttf'},
      {temp:'src/statics/font/iconfont.woff',dest:'src/statics/font/iconfont.woff'},
      {temp:'src/pages/detail/index.js',dest:'src/pages/detail/index.js'},
      {temp:'src/pages/detail/loadable.js',dest:'src/pages/detail/loadable.js'},
      {temp:'src/pages/detail/style.js',dest:'src/pages/detail/style.js'},
      {temp:'src/pages/detail/store/index.js',dest:'src/pages/detail/store/index.js'},
      {temp:'src/pages/detail/store/reducer.js',dest:'src/pages/detail/store/reducer.js'},
      {temp:'src/pages/detail/store/actionType.js',dest:'src/pages/detail/store/actionType.js'},
      {temp:'src/pages/detail/store/actionCreators.js',dest:'src/pages/detail/store/actionCreators.js'},
      {temp:'src/pages/home/index.js',dest:'src/pages/home/index.js'},
      {temp:'src/pages/home/style.js',dest:'src/pages/home/style.js'},
      {temp:'src/common/home/index.js',dest:'src/common/home/index.js'},
      {temp:'src/common/home/style.js',dest:'src/common/home/style.js'},
      {temp:'src/common/header/index.js',dest:'src/common/header/index.js'},
      {temp:'src/common/header/style.js',dest:'src/common/header/style.js'},
      {temp:'src/common/header/store/index.js',dest:'src/common/header/store/index.js'},
      {temp:'src/common/header/store/reducer.js',dest:'src/common/header/store/reducer.js'},
      {temp:'src/common/header/store/actionType.js',dest:'src/common/header/store/actionType.js'},
      {temp:'src/common/header/store/actionCreators.js',dest:'src/common/header/store/actionCreators.js'},
    ]
      const task=()=>{
        return new Promise((resolve,reject)=>{
          var time1=new Date().getTime();
          this.fs.copyTpl(
            this.templatePath('package.json'),
            this.destinationPath(`${this.props.projectName}/package.json`),
            this.props
          );
          filePath.forEach(i=>{
            this.fs.copy(
              this.templatePath(i.temp),
              this.destinationPath(`${this.props.projectName}/${i.dest}`)
            );
          })  
          resolve(time1)

        })
      }
      async function getTimes(){
         const time1= await task();
          var time2=new Date().getTime();
          var time=time2-time1
          console.log(` ${chalk.red(' created')} ${chalk.blue('34')} ${chalk.red(' files in')} ${chalk.blue(time)} ${chalk.red('ms')}`)
       }
      getTimes()
  }
  end(){
    console.log(` ${chalk.red(' cd ')+chalk.red(this.props.projectName)+chalk.red(' && yarn install')}`)
  }
};
