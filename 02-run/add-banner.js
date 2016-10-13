const fs = require('fs');
const pkg = require('./package.json');

fs.readFile('hello-world.txt', {encoding: 'utf8'}, (error, content) => {
  if (error) {
    process.exit(1);
  } else {
    content = `/* package: ${pkg.name}, ver: ${pkg.version} */\n\n` + content;
    fs.writeFile('hello-world.txt', content, (error) => {
      process.exit(error ? 1 : 0);
    });
  }
});