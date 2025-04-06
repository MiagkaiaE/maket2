
const mobileNuvButtonOpen = document.querySelector('.header__mobile-nav');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNuvButtonClose = document.querySelector('.mobile-nav__close')


mobileNuvButtonOpen.addEventListener('click', () => {
	mobileNav.classList.add('mobile-nav__open');
});

mobileNuvButtonClose.addEventListener('click', () => {
	mobileNav.classList.remove('mobile-nav__open');
})
