# grove:call-async

Get back the result of `Meteor.call` or `Meteor.apply` as a Promise with `Meteor.callAsync` or `Meteor.applyAsync`. You should use these methods if you're only concerned about the server's results of the Meteor Method — you either don't have client-side stubs or don't care what they return. 

`Meteor.callAsync` and `Meteor.applyAsync` have the same API as `Meteor.call`, except you *should not* give a callback as the last argument.

This is a polyfill of `Metor.{call,apply}Async` as discussed in [this pull request](https://github.com/meteor/meteor/pull/5005) and will be deprecated when that is finished.

**_Note - this package requires using Meteor 1.2-rc.16 or greater._**

## Usage
```js
const promise = Meteor.callAsync('someMethod', someArg1, someArg2);
promise.then((res) => {
  // res is what the server returned
});
promise.catch((err) => {
  // this is called if there was an error thrown from the Meteor method on the server
});

```

You could also be less verbose and drop the `promise` reference and chain the `then` and `catch` calls.

## Testing

```bash
$ npm test
```
You'll have to open `localhost:3000` to see the tests run