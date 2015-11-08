'use strict';

describe('Authentication service', function () {
  var AuthenticationService, httpBackend;

  beforeEach(module('civicMakersClientApp'));

  beforeEach(inject(function (_AuthenticationService_, $httpBackend) {
    AuthenticationService = _AuthenticationService_;
    httpBackend = $httpBackend;
  }));

  it('true to toEqual false', function(){
    expect(true).toEqual(false);
  });



  // it('should do something', function () {
  //   httpBackend.whenGET("http://api.reddit.com/user/yoitsnate/submitted.json").respond({
  //       data: {
  //         children: [
  //           {
  //             data: {
  //               subreddit: "golang"
  //             }
  //           },
  //           {
  //             data: {
  //               subreddit: "javascript"
  //             }
  //           },
  //           {
  //             data: {
  //               subreddit: "golang"
  //             }
  //           },
  //           {
  //             data: {
  //               subreddit: "javascript"
  //             }
  //           }
  //         ]
  //       }
  //   });
  //   redditService.getSubredditsSubmittedToBy("yoitsnate").then(function(subreddits) {
  //     expect(subreddits).toEqual(["golang", "javascript"]);
  //   });
    // httpBackend.flush();
  // });

});