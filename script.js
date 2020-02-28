
class HOVER {
    constructor (element) {
        if(typeof element == 'string') {
            this.el = document.querySelector(element)
        }else if (element instanceof HTMLElement) {
            this.el = element;
        }
        this.el.addEventListener('mouseover', () => this.move());
    }
    move() {
        this.el.style.marginBottom = this.random(0, window.innerHeight - this.el.clientHeight ) + 'px';
        this.el.style.marginLeft = this.random(0, window.innerWidth - this.el.clientWidth ) + 'px';
    }
    random(min, max) {
        return Math.floor(Math.random() * (max + 1 - min) + min);
    }
}

const hover = new HOVER('.header__textt');