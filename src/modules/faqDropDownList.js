function faqDropDownList() {
  document.querySelectorAll('.dropdown-list__btn').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.dropdown-list__item');

      document.querySelectorAll('.dropdown-list__item').forEach(el => {
        if (el !== item) el.classList.remove('dropdown-list__item--active');
      });

      item.classList.toggle('dropdown-list__item--active');
    });
  });
}

export default faqDropDownList;