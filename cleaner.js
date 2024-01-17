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
  console.log('Limpiando monstruitos')
  deleteDirFilesUsingPattern(/q-*/, 'generated/monstruitos/xs/')
  deleteDirFilesUsingPattern(/q-*/, 'generated/monstruitos/s/')
  deleteDirFilesUsingPattern(/q-*/, 'generated/monstruitos/ml/')
  console.log('Limpiando heladitos')
  deleteDirFilesUsingPattern(/q-*/, 'generated/heladitos/xs/')
  deleteDirFilesUsingPattern(/q-*/, 'generated/heladitos/s/')
  deleteDirFilesUsingPattern(/q-*/, 'generated/heladitos/ml/')
  console.log('Limpiando pollitos')
  deleteDirFilesUsingPattern(/q-*/, 'generated/pollitos/xs/')
  deleteDirFilesUsingPattern(/q-*/, 'generated/pollitos/s/')
  deleteDirFilesUsingPattern(/q-*/, 'generated/pollitos/ml/')
  console.log('Limpiando neutro')
  deleteDirFilesUsingPattern(/q-*/, 'generated/neutro/xs/')
  deleteDirFilesUsingPattern(/q-*/, 'generated/neutro/s/')
  deleteDirFilesUsingPattern(/q-*/, 'generated/neutro/ml/')
}
