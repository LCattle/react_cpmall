var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');
var del = require('del');

gulp.task('uclean', uclean);
gulp.task('clean', clean);

function uclean() {
  del(['/home/vagrant/coolpad/dist/uat/cpmall_react/**'], {force: true}).then(paths => {
    // console.log('Deleted files and folders: \n', paths.join('\n'));
  });
}

function clean() {
  del(['/home/vagrant/coolpad/dist/prod/cpmall_react/**'], {force: true}).then(paths => {
    // console.log('Deleted files and folders: \n', paths.join('\n'));
  });
}

function verify ()
{
    var options = { objectMode: true };
    return through(options, write, end);

    function write (file, enc, cb)
    {
        console.log('file', file.path);
        cb(null, file);
    }

    function end (cb)
    {
        console.log('done');
        cb();
    }
}
