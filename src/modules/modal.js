function modal() {
    const modal = document.querySelector(".modal");
    const closeBtn = modal.querySelector(".modal__btn-close");
    const form = modal.querySelector("form");

    if (!modal) return;

    if (localStorage.getItem("modalShown")) return;

    setTimeout(() => {
        modal.classList.add("modal--visible");
            localStorage.setItem("modalShown", "true");
    }, 1000);

    closeBtn.addEventListener("click", () => {
        modal.classList.remove("modal--visible");
    });

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            modal.classList.remove("modal--visible");
        });
    }

};

export default modal;