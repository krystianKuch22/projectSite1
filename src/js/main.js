const burgerBtn = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');
const year = document.querySelector('.footer__year');
const mainTitle = document.querySelector('.header__animTitle')

const animTitle = () => {
	mainTitle.parentElement.classList.add('header__title--slide')
	mainTitle.classList.add('header__animTitle--shown')
}

const handleBurgerAnim = () => {
	burgerBtn.lastElementChild.classList.toggle('animBurger')

}

const handleNav = () => {
	nav.classList.toggle('nav--open');
	handleBurgerAnim()
};

const handleYear = () => {
	const currentYear = new Date();

	year.textContent = currentYear.getFullYear();
};

burgerBtn.addEventListener('click', handleNav);
navLinks.forEach((link) => {
	link.addEventListener('click', handleNav);
});
document.addEventListener('DOMContentLoaded', () => {
	handleYear();
	animTitle();
});