document.getElementById('clear-btn').addEventListener('click', function () {
  chrome.tabs.query(
    { active: true, currentWindow: true },
    function (activeTabs) {
      // WAY 1
      chrome.tabs.sendMessage(activeTabs[0].id, { action: 'executeCode' });
    }
  );
});
