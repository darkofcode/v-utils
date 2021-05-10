import fs from "fs";
import path from "path";
import { getAllFileNames } from "./get-all-file-name";

const removeAllFiles = async (directoryPath) => {
  const allNames = await getAllFileNames(directoryPath);
  for (let i = 0; i < allNames.length; i++) {
    await fs.unlinkSync(path.join(directoryPath, allNames[i]), (err) => {
      if (err) throw err;
    });
  }
};

export { removeAllFiles };
