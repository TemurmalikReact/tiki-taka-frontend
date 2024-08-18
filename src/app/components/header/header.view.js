// HeaderView.js
import './header.scss';
import logo from '../../../assets/imgs/logo.png';

export class HeaderView {
  selector = 'header-container';

  constructor() {
    this.render();
    this.addBurgerToggle();
  }

  addBurgerToggle() {
    const burgerButton = document.getElementById('burger-button');
    const sidebar = document.getElementById('sidebar');

    burgerButton.addEventListener('click', () => {
      sidebar.classList.toggle('show');
      burgerButton.classList.toggle('open');
    });
  }

  render() {
    document.getElementById(this.selector).innerHTML = `
      <header class="header">
        <div class="nav">
          <div class="nav__logo">
            <p>🏆</p>
            <span>TIKI-TAKA</h1>    
          </div>   
          <div class="nav__toggle">
            <button id="burger-button">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div class="nav__socials">
            <button>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.02747 21.0273H5.98047C4.32347 21.0273 2.98047 19.6843 2.98047 18.0273L2.98047 5.36133C2.98047 3.70433 4.32347 2.36133 5.98047 2.36133L9.02747 2.36133M15.3045 6.01633L21.0175 11.7293L15.3045 17.4423M7.70447 11.7293L21.0015 11.7293" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        
        <div class="banner">
          <div class="banner__content">
            <div class="banner__title">
              <span>Farg’ona Futbol</span>
              <div class="tag">TIKI-TAKA</div>
            </div>
            <p class="banner__subtext">Biz bilan o'zingizni proffesional futbolchidek his eting</p>
          </div>
          <div class="banner__phone">
            <p>User phone number:</p>
            <span>+9998 99 212 12 12</span>
          </div>
        </div>
      </header>
    `;
  }
}
