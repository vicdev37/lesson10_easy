//создаем класс Option со свойствами

class Options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;	
			
	}
	// создаем метод-функцию внутри класса
	createDiv(text) {
		// создаем div
		const div = document.createElement('div');
		// в div кладем аргумент функции (text)
		div.textContent = text;
		//обращаемся к стилям div и через интерполяцию и контекст вызова пишем набор стилей для div
		div.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign}`;
		//помещаем div на страницу
		document.body.appendChild(div);
	}
};

//создаем новый объект через класс 
const options = new Options('250px', '250px', 'red', '30px', 'center');

//запускаем функцию 
options.createDiv('Объект');


