Tinytest.addAsync('callAsync - Should resolve the result of the method, no args', (test, done) => {
  Meteor.callAsync('goodMethod')
  .then( (val) => {
    test.equal(val, 'test value!');
    done();
  });
});

Tinytest.addAsync('callAsync - Should resolve the result of the method, with args', (test, done) => {
  const arg = 'This should be returned';
  Meteor.callAsync('goodMethodWithArg', arg)
  .then( (result) => {
    test.equal(arg, result);
    done();
  });
});

Tinytest.addAsync('callAsync - Should reject if there is an error in the method', (test, done) => {
  Meteor.callAsync('badMethod')
  .then( (val) => {
    // this should never run, so fail if it does
    test.equal(true, false);
    done();
  })
  .catch( (err) => {
    test.equal(err.error, 'some-stinkin-error');
    test.equal(err.reason, `You did this on purpose, didn't you?`);
    done();
  });
});
