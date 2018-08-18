var fs = require("fs");
var path = require("path");

/**
 * 遍历该文件夹和所有子文件夹，获取所有文件。
 *
 * @param  {String} dirname 文件夹路径
 * @return {[String]}         文件绝对路径的数组
 */
function readdirSync(dirname) {
  return fs
    .readdirSync(dirname)
    .map(function(filename) {
      var filePath = path.resolve(dirname, filename);
      var stat = fs.statSync(filePath);
      if (stat.isDirectory()) return readdirSync(filePath);
      else if (stat.isFile()) return [filePath];
    })
    .reduce(function(files, e) {
      return files.concat(e);
    }, []);
}

var entryConfig = function(options) {
  options.map = options.map || {};
  var files = options.pages
    ? readdirSync(path.resolve(options.dirPath, options.pages))
    : readdirSync(options.dirPath);
  var config = {
    entry: {},
    html: {}
  };
  files.forEach(function(file) {
    var name =
      path.relative(options.dirPath, file).indexOf("index.js") > 0
        ? path.relative(options.dirPath, file).split("/index.js")[0]
        : null;
    var el = options.map[name] || name;
    el ? (config.entry[el] = file) : null;
  });
  /*   files.forEach(function(file) {
    var name =
      path.relative(options.dirPath, file).indexOf("index.js") > 0
        ? path.relative(options.dirPath, file).split("/index.js")[0]
        : null;
    var el = options.map[name] || name;
    el ? config.entry.push(file) : null;
  }); */
  return config.entry;
};

module.exports = entryConfig;
