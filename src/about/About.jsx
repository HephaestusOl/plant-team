import '../about/About.style.css';

function About () {
  return (
		<section className='about__company'>
			<h2 className='about__title'>О КОМПАНИИ</h2>
			<ul className='features__list'>
				<li className='features__item'>
					<div className='features__block'>2</div>
					<p className='features__content'>
						Города присутствия:<br/> Санкт-Петербург и Москва
					</p>
				</li>
				<li className='features__item'>
					<div className='features__block'>&gt;30</div>
					<p className='features__content'>Лет среди лидеров рынка</p>
				</li>
				<li className='features__item'>
					<div className='features__block'>100</div>
					<p className='features__content'>Домов и бань сдаём ежегодно</p>
				</li>
			</ul>
		</section>
	)
}

export default About;