window.addEventListener("scroll", function () {
    const buttons = document.querySelectorAll("button");
    const container = document.querySelector(".container");

    const scrollPosition = window.scrollY;
    const containerHeight = container.clientHeight;

    if (scrollPosition >= containerHeight) {
        buttons.forEach((button) => {
            button.classList.add("fixed");
        });
    } else {
        buttons.forEach((button) => {
            button.classList.remove("fixed");
        });
    }
});
