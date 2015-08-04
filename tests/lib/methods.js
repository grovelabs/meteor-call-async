Meteor.methods({
  goodMethod() {
    return "test value!";
  },

  goodMethodWithArg(arg) {
    return arg;
  },

  badMethod() {
    throw new Meteor.Error("some-stinkin-error",
      "You did this on purpose, didn't you?"
    );
  }
});