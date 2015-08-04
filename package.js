Package.describe({
  name: 'grove:call-async',
  version: '0.1.0',
  summary: 'A polyfill for the proposed Meteor.callAsync',
  git: 'https://github.com/grovelabs/meteor-call-async',
  documentation: 'README.md'
});

Package.onUse( function(api) {
  api.versionsFrom('PLUGINS-PREVIEW@2');

  api.use('ecmascript');
  api.addFiles('lib/call-async.js');
});

Package.onTest( function(api) {
  api.use([
    'grove:call-async',
    'ecmascript',
    'mike:mocha-package@0.5.8',
    'practicalmeteor:chai@2.1.0_1',
    'practicalmeteor:sinon@1.14.1_2',
  ]);

  api.addFiles([
    'tests/lib/methods.js',
  ], ['client', 'server']);

  api.addFiles([
    'tests/client/call-async-tests.js',
  ], 'client');
});
