Meteor.callAsync = function(name, ...args) {
  // if it's a function, the last argument is the result callback,
  // not a parameter to the remote method.
  let callback;
  if ( args.length && typeof args[args.length - 1] === 'function' )
    callback = args.pop();
  return Meteor.applyAsync(name, args, callback);
}

Meteor.applyAsync = function(name, args, options, callback) {
  // We were passed 3 arguments. They may be either (name, args, options)
  // or (name, args, callback)
  if (!callback && typeof options === 'function') {
    callback = options;
    options = {};
  }
  options = options || {};
  options.returnStubValue = true;
  options.throwStubExceptions = true;

  return Meteor.apply(name, args, options, callback);
}