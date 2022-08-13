const {exec} = require('child_process');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Please enter your android device name: `, deviceName => {
  if (deviceName.length > 0) {
    exec(`emulator -avd ${deviceName}`, (error, _, stderr) => {
      if (error) {
        console.log(
          '\x1b[41m\x1b[37m%s\x1b[0m',
          'command failed',
          ':',
          `stderr: ${error}`,
        );
        return;
      }
      console.log(
        '\x1b[41m\x1b[37m%s\x1b[0m',
        'error',
        ':',
        `stderr: ${stderr}`,
      );
    });
  } else {
    console.log(
      '\x1b[41m\x1b[37m%s\x1b[0m',
      'error',
      ':',
      'device name is empty',
    );
  }
  readline.close();
});
