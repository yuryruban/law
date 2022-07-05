const item = document.querySelectorAll('.slider__item');

function action() {
	let image = document.querySelector('.slider__img img');
	let btnName = Number(this.getAttribute('name'));
	let imageName = Number(image.getAttribute('name'));
	if (imageName <= 1 && btnName == -1) {
		image.setAttribute('src', '../img/finish_icon_5.png');
		image.setAttribute('name', '5');
	} else if (imageName >= 5 && btnName == 1) {
		image.setAttribute('src', '../img/finish_icon_1.png');
		image.setAttribute('name', '1');
	} else {
		newName = imageName + btnName;
		image.setAttribute('src', '../img/finish_icon_' + newName + '.png');
		image.setAttribute('name', newName);
	}
};

item.forEach((el) => {
	el.preventDefault(); //Отключение стандартного поведения
	el.addEventListener('click', action)
});


function show() {
	let callbackForm = document.querySelector('.callback');
	callbackForm.classList.toggle('callback_active');
}

let callback = document.getElementById('callback');
let closeBtn = document.querySelector('.close');

callback.addEventListener('click', show);
closeBtn.addEventListener('click', show);


