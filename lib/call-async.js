Meteor.callAsync = function (method, ...args) {
  return Meteor.applyAsync(method, args);
};

Meteor.applyAsync = function (method, args, options = {}) {
  // Not checking argument types, hopefully no one is passing a callback here
  // If there is a stub and there is an error, it should throw an exception
  options.throwStubExceptions = true;
  return new Promise ( (resolve, reject ) => {
    Meteor.apply(method, args, options, (err, res) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};
