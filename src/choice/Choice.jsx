import './Choice.style.css'
import VacancyCard from './vacancyCard/VacancyCard'

function Choice() {
	return (
		<section className='divisions'>
			<h2 className='divisions__title'>ВЫБЕРИ ПОДРАЗДЕЛЕНИЕ:</h2>
			<ul className='divisions__list'>
				<li className='divisions__item, current'>Строительный отдел</li>
				<li className='divisions__item'>офис</li>
				<li className='divisions__item'>финансовый отдел</li>
				<li className='divisions__item'>отдел продаж</li>
				<li className='divisions__item'>внештатный сотрудник</li>
			</ul>
			<ul className='vacancy__list'>
				<VacancyCard />
			</ul>
			<button className='vacancy__button' type='button'>Откликнуться на вакансию</button>
		</section>
	)
}

export default Choice
