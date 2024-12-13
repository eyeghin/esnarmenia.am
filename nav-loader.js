document.addEventListener("DOMContentLoaded", function () {
    fetch("nav.html")
        .then((response) => {
            if (!response.ok) throw new Error("Failed to load navigation");
            return response.text();
        })
        .then((html) => {
            document.getElementById("nav-container").innerHTML = html;
        })
        .catch((error) => {
            console.error("Error loading navigation:", error);
        });
});
