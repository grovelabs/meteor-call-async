describe('Client callAsync tests', () => {

  it('Should call goodMethod and get the value returned sync and async', (done) => {
    const res = Meteor.callAsync('goodMethod', (err, res) => {
      expect(res).to.equal('test value!');
      done();
    });
    expect(res).to.equal('test value!');

  });

  it('Should call goodMethodWithArg with an arg and a callback and get the value returned sync and async', (done) => {
    const arg = 'foo';
    const res = Meteor.callAsync('goodMethodWithArg', arg, (err, res) => {
      expect(res).to.equal(arg);
      done();
    });
    expect(res).to.equal(arg);
  });

  it('Should call goodMethodWithArg with an arg and no callback and get the value returned sync', () => {
    const arg = 'foo';
    const res = Meteor.callAsync('goodMethodWithArg', arg);
    expect(res).to.equal(arg);
  });

  it('Should call badMethod, catch the thrown error, and never have the callback used', (done) => {
    const spy = sinon.spy();
    try {
      const syncResult = Meteor.callAsync('badMethod', spy);
      expect(syncResult).to.equal("definitely never get here");
    } catch (e) {
      expect(e.error).to.equal('some-stinkin-error');
    }
    // Give a little delay and make sure this wasn't ever called
    setTimeout(() => {
      expect(spy.called).to.be.false;
      done();
    }, 500);

  });
});

describe('Client applyAsync tests', () => {

  it('Should call goodMethod and get the value returned sync and async', (done) => {
    const res = Meteor.applyAsync('goodMethod', [], (err, res) => {
      expect(res).to.equal('test value!');
      done();
    });
    expect(res).to.equal('test value!');

  });

  it('Should call goodMethodWithArg with an arg and a callback and get the value returned sync and async', (done) => {
    const arg = 'foo';
    const res = Meteor.applyAsync('goodMethodWithArg', [arg], (err, res) => {
      expect(res).to.equal(arg);
      done();
    });
    expect(res).to.equal(arg);
  });

  it('Should call goodMethodWithArg with an arg and no callback and get the value returned sync', () => {
    const arg = 'foo';
    const res = Meteor.applyAsync('goodMethodWithArg', [arg]);
    expect(res).to.equal(arg);
  });

  it('Should call badMethod, catch the thrown error, and never have the callback used', (done) => {
    const spy = sinon.spy();
    try {
      const syncResult = Meteor.applyAsync('badMethod', [], spy);
      expect(syncResult).to.equal("definitely never get here");
    } catch (e) {
      expect(e.error).to.equal('some-stinkin-error');
    }
    // Give a little delay and make sure this wasn't ever called
    setTimeout(() => {
      expect(spy.called).to.be.false;
      done();
    }, 500);

  });
});