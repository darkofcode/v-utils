import fs from "fs";
import path from "path";

const deleteFolderRecursive = function (directoryPath) {
  let files = [];
  if (fs.existsSync(directoryPath)) {
    files = fs.readdirSync(directoryPath);
    files.forEach(function (file, index) {
      const curPath = path.join(directoryPath, file); //path + "/" + file
      if (fs.lstatSync(curPath).isDirectory()) {
        // recurse
        deleteFolderRecursive(curPath);
      } else {
        // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(directoryPath);
  }
};

const removeEverythingInDirectory = (directoryPath) => {
  let files = [];
  if (fs.existsSync(directoryPath)) {
    files = fs.readdirSync(directoryPath);
    files.forEach(function (file, index) {
      const curPath = path.join(directoryPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        // recurse
        deleteFolderRecursive(curPath);
      } else {
        // delete file
        fs.unlinkSync(curPath);
      }
    });
  }
};
// const deleteEverything = () => {
//   removeEverythingInDirectory(path.join(__dirname, "../../../private/temp"));
//   console.trace(`deleted!`);
// };
// deleteEverything();

export { removeEverythingInDirectory };
