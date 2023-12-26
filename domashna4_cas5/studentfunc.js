const fs = require ("fs");

//Zapishuvanje i vchituvanje na student vo fajlot

exports.fileWrite = (filename, data) => {
    return new Promise ((success,fail) => {
        fs.writeFile(filename, data, "utf-8", (err) => {
            if (err) return fail(err);
            return success();
        });
    });
};

exports.fileRead = (filename) => {
    return new Promise ((success, fail) => {
        fs.readFile(filename, "utf-8", (err, data) => {
            if(err) return fail(err);
            return success(data);
        });
    });
}


// Brishenje na student od fajlot

exports.fileDelete = (filename) => {
    return new Promise((success, fail) => {
      fs.unlink(filename, "utf-8", (err) => {
        if (err) return fail(err);
        return success();
      });
    });
  };