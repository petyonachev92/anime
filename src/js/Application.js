import EventEmitter from "eventemitter3";
import anime from "animejs";
export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.init();
    this.emit(Application.events.READY);
  }
  init() {
    let article = document.getElementsByClassName('article')[0];

    article.addEventListener('click', this._animate);
  }
  
  _animate() {
    anime({
      targets: '.article',
      translateX: 100,
      easing: 'spring(1, 80, 15, 0)'      
    })
  }
}
