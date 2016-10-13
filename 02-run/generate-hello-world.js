const fs = require('fs');

fs.writeFile('hello-world.txt', 'Hello world!', (error) => {
  process.exit(error ? 1 : 0);
});