chrome.runtime.onMessage.addListener(function (request) {
  if (request.action === 'executeCode') {
    localStorage.clear(); // clear local storage
    sessionStorage.clear(); // clear session storage
  }
});
