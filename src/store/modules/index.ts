import camelCase from "lodash/camelCase";
const files = import.meta.globEager("./*.ts");

const modules = {};
for (const key in files) {
  if (key === "./index.ts") continue;
  modules[camelCase(key.replace(/(\.\/|\.ts)/g, ""))] = files[key].default;
}

// const requireModule = require.context(".", false, /\.js$/); // Get js files inside modules folder
// const modules = {};

// requireModule.keys().forEach((fileName) => {
//   // Avoid the index.js file
//   if (fileName === "./index.js") {
//     return;
//   }
//   const moduleName = camelCase(fileName.replace(/(\.\/|\.js)/g, ""));
//   modules[moduleName] = requireModule(fileName).default;
// });

export default modules;
