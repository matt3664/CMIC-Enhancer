// Hide old UI elements (modify selectors based on CMIC)
document.querySelectorAll("table, div, input").forEach(el => el.style.display = "none");

// Create a modern overlay UI
let overlay = document.createElement("div");
overlay.id = "cmic-enhancer-overlay";
overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.background = "rgba(255, 255, 255, 0.95)";
overlay.style.zIndex = "9999";
overlay.style.padding = "20px";
overlay.style.fontFamily = "Arial, sans-serif";

overlay.innerHTML = `
    <h2>Modern CMIC Interface</h2>
    <button id="toggle-old-ui">Show Old UI</button>
    <button id="reload-ui">Reload Overlay</button>
`;

// Append overlay to body
document.body.appendChild(overlay);

// Toggle button to show original UI
document.getElementById("toggle-old-ui").addEventListener("click", () => {
    document.getElementById("cmic-enhancer-overlay").style.display = "none";
});

// Reload button to refresh overlay
document.getElementById("reload-ui").addEventListener("click", () => {
    document.getElementById("cmic-enhancer-overlay").style.display = "block";
});
