import '../vacancyCard/VacancyCard.style.css';
import vacancyIcon from '../../assets/svg/icon_vacancy.svg'
import vacancyPrice from '../../assets/svg/icon_price.svg'
import addVacancy from '../../assets/svg/add_icon.svg'

function VacancyCard () {
  return (
		<>
			<li className='vacancy__item'>
				<div className='vacancy__info'>
					<div className='vacancy__name-container'>
						<img
							className='vacancy__item-img'
							src={vacancyIcon}
							alt='иконка вакансии'
						/>
						<p className='vacancy__name'>Прораб</p>
					</div>
					<div className='vacancy__price-container'>
						<img
							className='vacancy__price-img'
							src={vacancyPrice}
							alt='стоимость вакансии'
						/>
						<p className='vacancy__price'>ОТ 00 000 РУБ</p>
					</div>
				</div>
				<img src={addVacancy} alt='добавить вакансию' />
			</li>
			<li className='vacancy__item'>
				<div className='vacancy__info'>
					<div className='vacancy__name-container'>
						<img
							className='vacancy__item-img'
							src={vacancyIcon}
							alt='иконка вакансии'
						/>
						<p className='vacancy__name'>Специалист службы снабжения</p>
					</div>
					<div className='vacancy__price-container'>
						<img
							className='vacancy__price-img'
							src={vacancyPrice}
							alt='стоимость вакансии'
						/>
						<p className='vacancy__price'>ОТ 00 000 РУБ</p>
					</div>
				</div>
				<img src={addVacancy} alt='добавить вакансию' />
			</li>
			<li className='vacancy__item'>
				<div className='vacancy__info'>
					<div className='vacancy__name-container'>
						<img
							className='vacancy__item-img'
							src={vacancyIcon}
							alt='иконка вакансии'
						/>
						<p className='vacancy__name'>Логист</p>
					</div>
					<div className='vacancy__price-container'>
						<img
							className='vacancy__price-img'
							src={vacancyPrice}
							alt='стоимость вакансии'
						/>
						<p className='vacancy__price'>Обсуждается на собеседовании</p>
					</div>
				</div>
				<img src={addVacancy} alt='добавить вакансию' />
			</li>
			<li className='vacancy__item'>
				<div className='vacancy__info'>
					<div className='vacancy__name-container'>
						<img
							className='vacancy__item-img'
							src={vacancyIcon}
							alt='иконка вакансии'
						/>
						<p className='vacancy__name'>Проектировщик</p>
					</div>
					<div className='vacancy__price-container'>
						<img
							className='vacancy__price-img'
							src={vacancyPrice}
							alt='стоимость вакансии'
						/>
						<p className='vacancy__price'>ОТ 00 000 РУБ</p>
					</div>
				</div>
				<img src={addVacancy} alt='добавить вакансию' />
			</li>
		</>
	)
}

export default VacancyCard