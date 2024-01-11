chrome.webNavigation.onCompleted.addListener(function(details) {
    if (details.url.startsWith("https://www3.animeflv.net/")) {
      chrome.storage.local.get({ visits: [] }, function(result) {
        const visits = result.visits;
        visits.push({ url: details.url, timestamp: new Date() });
        chrome.storage.local.set({ visits: visits });
      });
    }
  });
  