const fs = require('fs');

const readFile = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    throw new Error('Error reading file:', err);
  }
};

module.exports = readFile;