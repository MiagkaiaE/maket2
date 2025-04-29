
const mobileNav = document.querySelector('.mobile-nav');

//универсальная функция для закрытия и открытия мобильного меню и модального окна
function setElementState(element, className, action, manageOverflow = true) {
	if (action === 'add') {
		element.classList.add(className);
	} else if (action === 'remove') {
		element.classList.remove(className);
	 } else {
		throw new Error('Action must be "add" or "remove"');
	 }
	// управляем подключением/ отключением скрола
	if (manageOverflow) {
		// проверяем открыт ли элемент (добавлен ли класс)
		const isOpen = element.classList.contains(className);
		// удаляем/добавляем скрол в зависимости от состояния класса
		document.body.style.overflow = (isOpen) ? 'hidden' : '';
	 }
}
// Функция для запуска эффекта нажатия
function triggerPressEffect(element) {
	element.classList.add('active');
	setTimeout(() => {
	  element.classList.remove('active');
	}, 200); // Длительность эффекта нажатия — 200 мс
 }

// Проверка, что mobileNav существует
if (mobileNav) {
	// Обработчик для click с делегированием
	document.addEventListener('click', (event) => {
		//опредяляем, где произошел клик
	  	const target = event.target;
 
	  // Открытие меню (button.header__mobile-nav)
		if (target.closest('.header__mobile-nav')) {
			const navButtonOpen = target.closest('.header__mobile-nav');
		  	setElementState(mobileNav, 'mobile-nav--open', 'add');
		  	triggerPressEffect(navButtonOpen); // Эффект нажатия
	  }
  
	  // Закрытие по крестику (button.mobile-nav__close)
		if (target.closest('.mobile-nav__close')) {
			const navButtonClose = target.closest('.mobile-nav__close');
			setElementState(mobileNav, 'mobile-nav--open', 'remove');
			triggerPressEffect(navButtonClose);
	  }
 
	  // Закрытие при нажатии на пункт меню (.mobile-nav__item a)
		if (target.closest('.mobile-nav__item .nav-link')) {
			// event.preventDefault();
			const link = target.closest('.mobile-nav__item .nav-link');
			link.classList.add('active'); // Добавляем active для подчёркивания
			setTimeout(() => {
				setElementState(mobileNav, 'mobile-nav--open', 'remove');
				link.classList.remove('active');
			 }, 200);
		}
		
		// Клик по иконке телефона (a.header__mobile-phone)
		if (target.closest('.header__mobile-phone')) {
			const phoneButton = target.closest('.header__mobile-phone');
			triggerPressEffect(phoneButton); // Эффект нажатия
			// Ссылка tel: сработает автоматически
		}
		//клик по кнопке Записаться на курс
		if (target.closest('.hero__button')) {
			const heroButton = target.closest('.hero__button');
			triggerPressEffect(heroButton); // Эффект нажатия
		}
	});
 
	// Закрытие меню по клавише Esc
	document.addEventListener('keydown', (event) => {
	  if (event.key === 'Escape' && mobileNav.classList.contains('mobile-nav--open')) {
		 	setElementState(mobileNav, 'mobile-nav--open', 'remove');
	  }
	});
 } else {
	console.error('Элемент .mobile-nav не найден');
 }


