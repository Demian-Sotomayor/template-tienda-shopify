const mix = require('laravel-mix')

mix
  .disableNotifications()
  .sourceMaps(true, 'source-map')
  .js('src/js/main.js', 'assets')
  .js('src/js/password.js', 'assets')
  .postCss('src/css/main.css', 'assets', [require('tailwindcss')])
