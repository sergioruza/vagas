const fs = require('fs');

const writeFile = (path, data) => {
  const jsonString = JSON.stringify(data);

  try {
    fs.writeFileSync(path, jsonString, 'utf8');
    return true;
  } catch (err) {
    throw new Error('Error writing file:', err);
  }
};

module.exports = writeFile;
