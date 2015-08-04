# grove:call-async

This package is a polyfill for the proposed `Meteor.callAsync`.

## Prior Art

[This hackpad](https://meteor.hackpad.com/Separating-call-into-call-and-callAsync-kNjhay2PLlM)

## Usage
You use `Meteor.callAsync` and `Meteor.applyAsync` exactly as their counterparts, `Meteor.call` and `Meteor.apply`.

**_Note - this package requires using the PLUGINS-PREVIEW@2 Meteor release._**

## How it works
This package makes use of two undocumented options for Meteor Methods. The first is the [`returnStubValue`](https://github.com/meteor/meteor/blob/447d236a9beb7fd7be7bc90589ea4cee0d8d7c20/packages/ddp-client/livedata_connection.js#L682) which will cause the return value from a Meteor method stub to actually be returned instead of `undefined`. The second is the [recently created](https://github.com/meteor/meteor/pull/4202) [`throwStubExceptions`](https://github.com/meteor/meteor/blob/447d236a9beb7fd7be7bc90589ea4cee0d8d7c20/packages/ddp-client/livedata_connection.js#L835) option. With this option, Meteor method stubs will throw exceptions instead of logging them to the console. If an exception is thrown, the method will not be run on the server.