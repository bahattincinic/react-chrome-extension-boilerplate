chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  sendResponse({ status: false });
});
