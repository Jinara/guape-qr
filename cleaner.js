import fs from "fs";
import { resolve } from "path";

const deleteDirFilesUsingPattern = (pattern, dirPath = __dirname) => {
  // default directory is the current directory

  // get all file names in directory
  fs.readdir(resolve(dirPath), (err, fileNames) => {
    if (err) throw err;

    // iterate through the found file names
    for (const name of fileNames) {
      // if file name matches the pattern
      if (pattern.test(name)) {
        // try to remove the file and log the result
        fs.unlink(resolve(dirPath + name), (err) => {
          if (err) throw err;
          console.log(`Deleted ${name}`);
        });
      }
    }
  });
};

export const clean = () => {
  deleteDirFilesUsingPattern(/q-*/, 'generated/monstruitos/')
  deleteDirFilesUsingPattern(/q-*/, 'generated/heladitos/')
  deleteDirFilesUsingPattern(/q-*/, 'generated/pollitos/')
  deleteDirFilesUsingPattern(/q-*/, 'generated/neutro/')
}
