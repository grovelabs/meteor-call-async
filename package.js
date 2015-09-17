Package.describe({
  name: 'grove:call-async',
  version: '1.0.0',
  summary: 'Call Meteor Methods asynchronously, getting a Promise in return',
  git: 'https://github.com/grovelabs/meteor-call-async',
});

Package.onUse(function(api) {
  api.versionsFrom('1.2-rc.16');
  api.use('ecmascript');
  api.addFiles('lib/call-async.js')
});

Package.onTest(function(api) {
  api.use([
    'grove:call-async',
    'ecmascript',
    'tinytest',
  ]);

  api.addFiles('tests/server/methods.js', 'server');

  api.addFiles([
    'tests/lib/call-async.js',
    'tests/lib/apply-async.js',
  ], ['client', 'server']);
});
