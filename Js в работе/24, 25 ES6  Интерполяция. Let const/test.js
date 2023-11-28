class Options {
    constructor(height, width, bg, frontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.background = bg;
        this.frontSize = frontSize;
        this.textAlign = textAlign;
    }
    createDiv(text = 'Кто тут') {
        let perStyle = document.querySelector('pre');
        let newDiv = document.createElement('div');
        document.body.insertBefore(newDiv, perStyle);
        newDiv.textContent = text;
        // newDiv.style.height = this.height;
        // newDiv.style.width = this.width;
        // newDiv.style.background = this.background;
        // newDiv.style.frontSize = this.frontSize;
        // newDiv.style.textAlign = this.textAlign;
        newDiv.style.cssText = `
            background: ${this.background};
            height: ${this.height};
            width: ${this.width};
            textAlign: ${this.textAlign};
            frontSize: ${this.frontSize};
            `;
        
        console.log(this.background);
        console.log('я работаю');
    }
    
};
let div1 = new Options('100px', '100px', 'red', '100px', 'center');
console.log(div1);
div1.createDiv();


