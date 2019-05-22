const fs = require('fs');
const chalk = require('chalk');
let dir = '';

const createFolder = (name, types) => {
  dir = `./${name}`;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  let fileJsx = `${dir}/${name}.component.${types.jstype}`;
  let fileCss = `${dir}/${name}.component.${types.csstype}`;

  fs.writeFile(
    fileJsx,
    `import React,{Component} from "react";\n
import './${name}.component.${types.csstype}';\n
class ${name} extends Component{\n
	render(){\n
		return(\n
			<div>\n
			   ${name} component works!\n
			</div>);\n
		}\n
	}\n
export default ${name};`,

    err => {
      if (err) {
        console.log(err);
      }
      console.log(
        chalk.green(
          `file : ${name}.component.${types.jstype} genrated in ${name} folder`,
        ),
      );
    },
  );

  fs.writeFile(fileCss, '*{padding:0}', err => {
    if (err) {
      console.log(err);
    }
    console.log(
      chalk.green(
        `file : ${name}.component.${types.csstype} generated in ${name} folder`,
      ),
    );
  });
};

module.exports = {
  createFolder,
};
