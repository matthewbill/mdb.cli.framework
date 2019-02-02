/* eslint-disable no-console */
/**
 * @copyright Matthew Bill
 */

const figlet = require('figlet');

class BaseConsole {
  header(title, packageFile) {
    // eslint-disable-next-line no-unused-vars
    const self = this;
    console.log(figlet.textSync(title, {}));
    console.log('-------------------');
    console.log(`Version: ${packageFile.version}`);
    console.log(`Author: ${packageFile.author}`);
    console.log('-------------------');
  }
}
module.exports = BaseConsole;
