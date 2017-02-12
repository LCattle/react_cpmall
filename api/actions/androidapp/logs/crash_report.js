
// const fs = require('fs');

export default function postCrashReport(req) {
  return new Promise((resolve, reject) => {
    // write to database
    console.log('崩溃报告')
  	console.log(JSON.stringify(req));
    // fs.appendFile('android_cpmall_crash_report', '', function(err) {

    // });
    req.session.destroy(() => {
      req.session = null;
      return resolve(null);
    });
  });
}
