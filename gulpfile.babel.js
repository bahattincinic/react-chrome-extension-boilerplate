import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';
import webpack from 'webpack';
import rimraf from 'rimraf';
import popupWebpackConfig from './webpack.popup';
import eventWebpackConfig from './webpack.event';
import debugWebpackConfig from './webpack.debug';
import contentWebpackConfig from './webpack.content';


const plugins = loadPlugins();
const isDebug = !process.argv.includes('--production');


function runWebpack(config, onComplete) {
  webpack(config, (err, stats) => {
    if (err) throw new plugins.util.PluginError('webpack', err);
    plugins.util.log('[webpack]', stats.toString());
    onComplete();
  });
}


gulp.task('bundle', ['clean'], (cb) => {
  if (isDebug) {
    runWebpack(debugWebpackConfig, () => {
      runWebpack(contentWebpackConfig, cb);
    });
  } else {
    runWebpack(popupWebpackConfig, () => {
      runWebpack(eventWebpackConfig, () => {
        runWebpack(contentWebpackConfig, cb);
      });
    });
  }
});


gulp.task('popup-html', ['clean'], () => {
  if (isDebug) {
    return gulp.src('src/index.html')
      .pipe(gulp.dest('./build'));
  }
  return gulp.src('src/index.html')
      .pipe(plugins.rename('popup.html'))
      .pipe(gulp.dest('./build'));
});

gulp.task('copy-manifest', ['clean'], () => gulp.src('manifest.json')
    .pipe(gulp.dest('./build')));

gulp.task('copy-images', ['clean'], () => gulp.src('src/images/*')
    .pipe(gulp.dest('./build/images/')));

gulp.task('clean', (cb) => {
  rimraf('./build', cb);
});

gulp.task('build', ['copy-manifest', 'copy-images', 'bundle', 'popup-html']);

gulp.task('watch', ['default'], () => {
  gulp.watch('src/**/*', ['build']);
});

gulp.task('default', ['build']);
