document.getElementById("apply").addEventListener("click", () => {
    chrome.scripting.executeScript({
        target: {tabId: chrome.tabs.TAB_ID_NONE},
        function: () => alert("Overlay Applied!")
    });
});
