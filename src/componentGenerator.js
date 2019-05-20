const fs = require("fs");
let dir = "";

const createFolder = (name, types) => {
	dir = `./${name}`;
	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir);
	}

	let fileJsx = `${dir}/${name}.component.${types.jstype}`;
	let fileCss = `${dir}/${name}.component.${types.csstype}`;

	fs.writeFile(
		fileJsx,
		`import react,{Component} from "react";\n
import './${name}.component.${types.csstype}';\n
class ${name} extends Component{\n
	render(){
		return(
			<div>
			   ${name} component works!
			</div>);
		}\n
	}\n
export default ${name};`,

		err => {
			if (err) {
				console.log(err);
			}
			console.log(`file : ${fileJsx} genrated`);
		}
	);

	fs.writeFile(fileCss, "*{padding:0}", err => {
		if (err) {
			console.log(err);
		}
		console.log(`file : ${fileCss} genrated`);
	});
};

module.exports = {
	createFolder
};
