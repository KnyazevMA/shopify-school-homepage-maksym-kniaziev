function feedback() {
    const form = document.querySelector('.feedback__form');
    const successMsg = document.querySelector('.feedback__success');

    if (form && successMsg) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            form.reset();

            successMsg.classList.add('is-visible');

            setTimeout(() => {
                successMsg.classList.remove('is-visible');
            }, 3000);
        });
    };
};

export default feedback;