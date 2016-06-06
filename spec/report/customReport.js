var myReporter = {
  startTime : undefined,
  endTime : undefined,
  content : '',
  jasmineStarted: function(suiteInfo) {
    this.startTime = Date.now();
    this.content += 'Running suite with ' + suiteInfo.totalSpecsDefined;
 },
  suiteStarted: function(result) {
    this.content += 'Suite started: ' + result.description + ' whose full description is: ' + result.fullName;
 },
   specStarted: function(result) {
    this.content +='Spec started: ' + result.description + ' whose full description is: ' + result.fullName;
},
  specDone: function(result) {
    this.content +='Spec: ' + result.description + ' was ' + result.status;
   for(var i = 0; i < result.failedExpectations.length; i++) {
    this.content +='Failure: ' + result.failedExpectations[i].message;
    this.content +=result.failedExpectations[i].stack;
  }
  this.content +=result.passedExpectations.length;
},
  suiteDone: function(result) {
    this.content +='Suite: ' + result.description + ' was ' + result.status;
  for(var i = 0; i < result.failedExpectations.length; i++) {
    this.content +='AfterAll ' + result.failedExpectations[i].message;
    this.content +=result.failedExpectations[i].stack;
   }
 },
 jasmineDone: function() {
   this.endTime = Date.now();
   this.content +='Finished suite';
  }
};
jasmine.getEnv().addReporter(myReporter);
describe('Top Level suite', function() {
  it('spec', function() {
    expect(1).toBe(1);
  });

  describe('Nested suite', function() {
    it('nested spec', function() {
      expect(true).toBe(true);
    });
  });
});
