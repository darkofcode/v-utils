const exec = require("child_process").exec;

const copyFile = (originalNameFullPath, destinationNameFullPath) => {
  exec(`cp "${originalNameFullPath}" "${destinationNameFullPath}"`);
};

export { copyFile };
