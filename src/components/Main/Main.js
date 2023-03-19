import './Main.css';
import logo from '../../images/ball.svg';

function Main() {

	return (
		<>
			<header className="header">
				<a
					className="title"
					href="#"
					rel="noopener noreferrer"
				>
					EIGHTBALL
				</a>
			</header>

			<main className='main App App-header'>

				<img src={logo} className="logo" alt="logo" />

				<div className='about_section'>
					<p className='text'>
						Тут какой-то текст я хз какой
					</p>
					<p className='text'>
						А ещё диаграммы связей являются только методом политического участия и призваны к ответу.
					</p>
				</div>

				<div className="form">
					<fieldset className="form__set">
						<label className="form__field form__field_type_row">
							<input type="text" className="form__input" id="name-input" required minlength="7" />
							<span className="form__placeholder">
								Ваше имя
							</span>
							<span className="form__input-error"></span>
						</label>
						<button type="button" className="form__submit form__button button">
							Получить предсказание
						</button>
					</fieldset>
				</div>

			</main>

			<footer className="footer">
				<a
					className="title"
					href="#"
					rel="noopener noreferrer"
				>
					EIGHTBALL
				</a>
			</footer>

			<div className='divination_container'>
				<p className='divination_text'>Тут текст  спредвскак</p>
			</div>
		</>
	)
}

export default Main;