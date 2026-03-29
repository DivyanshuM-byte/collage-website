<script>
    const toggleBtn = document.getElementById("theme-toggle");

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.documentElement.setAttribute("data-color-scheme", savedTheme);
        toggleBtn.textContent = savedTheme === "dark" ? "☀️" : "🌙";
    }

    toggleBtn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-color-scheme");

        if (currentTheme === "dark") {
            document.documentElement.setAttribute("data-color-scheme", "light");
            localStorage.setItem("theme", "light");
            toggleBtn.textContent = "🌙";
        } else {
            document.documentElement.setAttribute("data-color-scheme", "dark");
            localStorage.setItem("theme", "dark");
            toggleBtn.textContent = "☀️";
        }
    });
</script>
