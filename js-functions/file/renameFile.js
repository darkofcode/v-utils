const exec = require("child_process").exec;

const renameFile = (originalNameFullPath, destinationNameFullPath) => {
  exec(`mv "${originalNameFullPath}" "${destinationNameFullPath}"`);
};

export { renameFile, renameFile as move };
