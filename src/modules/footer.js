function footerDropDown() {
    document.querySelectorAll('.footer__btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const expanded = btn.getAttribute('aria-expanded') === 'true';

            btn.setAttribute('aria-expanded', !expanded);

            const list = document.getElementById(btn.getAttribute('aria-controls'));

            list.dataset.open = !expanded;
        });
    });
};

export default footerDropDown;