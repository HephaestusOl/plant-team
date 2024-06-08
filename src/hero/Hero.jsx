import '../hero/Hero.style.css'
import hero from '../assets/images/hero.jpeg';

function Hero () {
  return (
		<section className='hero'>
			<img
				className='hero__image'
				src={hero}
				width={1440}
				height={960}
				alt='дружная семья'
			/>
			<h1 className='hero__title'>«Пестовский Лесокомбинат»</h1>
			<p>Cтань частью нашей команды!</p>
      <button type='button'>отправить анкету</button>
		</section>
	)
}

export default Hero