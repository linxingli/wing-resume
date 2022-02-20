let fs = require("fs")
let path = require("path")

const getText = (filePath) => {
  try {
    let result = fs.readFileSync(filePath);
    return result.toString()
  } catch (e) {
    console.log('error>>>', e);
  }
}

const createFile = (str, path) => {
  str = "`" + str + "`"
  let content = `
    const res = ${str}
    export default res
  `
  fs.writeFile(path + "lxl.js", content, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
}

let str = getText(path.join(__dirname, '../src/resume/lxl.md'))

createFile(str, path.join(__dirname, '../src/resume/'))