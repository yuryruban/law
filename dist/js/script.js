let burger = document.querySelector('.burger');

burger.addEventListener('click', function () {
	document.querySelector('.nav').classList.toggle('nav_active');
	document.querySelector('.nav').classList.toggle('nav_disactive');
});


//Переключение

let serv = document.querySelectorAll('.services__menu-item');

function action() {
	document.querySelector('.services__menu-item-active').classList.remove('services__menu-item-active');
	// document.querySelector('.services__items_active').classList.remove('services__items_active');
	let num = this.getAttribute('num');
	let serv_list = document.querySelectorAll('.services__items');
	document.querySelector('.services__items_active').classList.remove('services__items_active');
	serv_list[num].classList.add('services__items_active');
	this.classList.add('services__menu-item-active');
}

serv.forEach((el) => {
	el.addEventListener('click', action)
});



//Слайдер

function newSlideLeft() {
	let slider__text_active = document.querySelector('.slider__text_active');
	let num = slider__text_active.getAttribute('name');
	if (num == 1) {
		slider__text_active.classList.remove('slider__text_active');
		document.querySelector('.slider__text__4').classList.add('slider__text_active');
	}
	else {
		slider__text_active.classList.remove('slider__text_active');
		num = num - 1;
		document.querySelector('.slider__text__' + num).classList.add('slider__text_active');
	}
};

function newSlideRight() {
	let slider__text_active = document.querySelector('.slider__text_active');
	let num = slider__text_active.getAttribute('name');
	if (num == 4) {
		slider__text_active.classList.remove('slider__text_active');
		document.querySelector('.slider__text__1').classList.add('slider__text_active');
	}
	else {
		slider__text_active.classList.remove('slider__text_active');
		num = num * 1 + 1;
		document.querySelector('.slider__text__' + num).classList.add('slider__text_active');
	}
};

let slider__left = document.querySelector('.slider__left');
let slider__right = document.querySelector('.slider__right');
slider__left.addEventListener('click', newSlideLeft);
slider__right.addEventListener('click', newSlideRight);


// Плавный скролл
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		const blockID = anchor.getAttribute('href').substr(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}
