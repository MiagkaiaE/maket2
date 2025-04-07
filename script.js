
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


// Проверка, что mobileNav существует
if (mobileNav) {
	// Обработчик для click с делегированием
	document.addEventListener('click', (event) => {
		//опредяляем, где произошел клик
	  const target = event.target;
 
	  // Открытие меню (button.header__mobile-nav)
	  if (target.closest('.header__mobile-nav')) {
		 setElementState(mobileNav, 'mobile-nav--open', 'add');
	  }
 
	  // Закрытие по крестику (button.mobile-nav__close)
	  if (target.matches('.mobile-nav__close')) {
		 setElementState(mobileNav, 'mobile-nav--open', 'remove');
	  }
 
	  // Закрытие при нажатии на пункт меню (.mobile-nav__item a)
	  if (target.matches('.mobile-nav__item a')) {
		 event.preventDefault();
		 setElementState(mobileNav, 'mobile-nav--open', 'remove');
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


