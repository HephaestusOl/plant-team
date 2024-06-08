import '../team/Team.style.css';
import peoplePic from '../assets/images/people.png'

function Team () {
  return (
		<section className='team'>
			<div className='title__container'>
				<h2 className='team__title'>
					Наши успехи — это заслуга замечательных людей, работающих
					<br /> в нашей Команде. <br />У Нас всегда есть вакансии для сильных
					кандидатов
				</h2>
			</div>
			<img className='people__img' src={peoplePic} alt='people' />
			<div className='action'>
				Если чувствуешь в Себе потенциал и здоровые амбиции — ждём рядом с Нами!
        <button className="join__team" type='button'>ПРИСОЕДИНИТЬСЯ К КОМАНДЕ</button>
			</div>
		</section>
	)
}

export default Team