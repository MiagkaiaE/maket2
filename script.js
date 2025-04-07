
const mobileNavButtonOpen = document.querySelector('.header__mobile-nav');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavButtonClose = document.querySelector('.mobile-nav__close');
const mobileNavLinks = document.querySelectorAll('.mobile-nav__item a');

// проверка, что элементы существуют
if (mobileNavButtonOpen && mobileNavButtonClose && mobileNav && mobileNavLinks) {
	// меню открытие
	mobileNavButtonOpen.addEventListener('click', () => {
		mobileNav.classList.add('mobile-nav--open');
		document.body.style.overflow = 'hidden'; // Блокируем скролл страницы
	});
	// закрытие по крестику
	mobileNavButtonClose.addEventListener('click', () => {
		mobileNav.classList.remove('mobile-nav--open');
		document.body.style.overflow = ''; //возвращаем скрол по умолчанию
	});
	// закрытие при нажатии на пункт меню
	mobileNavLinks.forEach(link => {
		link.addEventListener('click', (event) => {
			event.preventDefault(); // Отменяем стандартное поведение ссылки для одностраничника
			mobileNav.classList.remove('mobile-nav--open');
			document.body.style.overflow = ''; //возвращаем скрол по умолчанию
		})
	});

	// Закрытие меню по клавише Esc
	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape' && mobileNav.classList.contains('mobile-nav__open')) {
			mobileNav.classList.remove('mobile-nav__open');
			document.body.style.overflow = ''; //возвращаем скрол по умолчанию
		}
	 });
} else {
	console.error('Один из элементов не найден: .header__mobile-nav, .mobile-nav или .mobile-nav__close');
}
