# laravel-elixir-footer

This is a simple footer banner wrapper around Laravel Elixir. Add it to your Elixir-enhanced Gulpfile, like so:

## Install

```
npm install --save-dev laravel-elixir-footer
```

## Usage

This will scan your `public` directory for all css/js files and add a given footer message to the files.

### Example *Gulpfile*:

```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-footer');

elixir(function(mix) {
   mix.footer('\n/** ABC Solutions - 2014 */\n');
});
```

#### Advanced example

In second argument you could pass data to be used in the banner.

```javascript
var pkg = require('./composer.json');
var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');

mix.footer(banner, { pkg : pkg });
```

For more examples please refer to the documentation for the [gulp-footer](https://www.npmjs.org/package/gulp-footer) package. 