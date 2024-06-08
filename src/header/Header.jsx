import '../header/Header.style.css';
import mainLogo from '../assets/svg/logo.svg';

function Header () {
  return (
		<header className='header'>
      <a className='header__logo' href="/">
			  <img src={mainLogo} width={77} height={39} alt='logo' />
      </a>
			<nav className='navigation__header'>
				<ul className='navigation__list'>
					<li className='navigation__item'>
						<a href='/'>ГЛАВНАЯ</a>
					</li>
					<li className='navigation__item'>
						<a href='/'>ДОМА</a>
					</li>
					<li className='navigation__item'>
						<a href='/'>БАНИ</a>
					</li>
				</ul>
			</nav>
			<ul className='navigation__contacts'>
				<li className='contacts__item'>
					<span className='contacts__city'>Санкт-Петербург:</span> 8 (812)
					603-72-22
				</li>
				<li className='contacts__item'>
					<span className='contacts__city'>Москва:</span> 8 (499) 380-77-33
				</li>
			</ul>
		</header>
	)
}

export default Header;