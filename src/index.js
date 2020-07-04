(function() {
  const fs = require("fs");
  const path = require("path")

  function mergedRequire(dirname) {
    let mergedExports = {};
    const filenames = fs.readdirSync(dirname);

    for (let filename of filenames) {
      mergedExports = {
        ...mergedExports,
        ...require(path.resolve(dirname, filename))
      };
    }

    return mergedExports;
  }

  module.exports = mergedRequire
})()
