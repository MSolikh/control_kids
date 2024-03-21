import React, { useState } from 'react'
import ApiCall from '../Api/Api'
import Bgr from '../Bgr/Bgr'
import './Login.css'
import logo from './image/logo.png'
import ru from './image/russian-flag.png'
import en from './image/usa-flag.png'
import uz from './image/uzb_flag.jpg'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

export default function Login() {
	const [selectedCheckboxes, setSelectedCheckboxes] = useState([])
	const [selectedLang, setSelectedLang] = useState('uz')

	const uzLang = ['Sport', `Ta'lim`, "O'yin", 'Kulgu', 'Multfilmlar', '0+']
	const ruLang = ['Спорт', 'Обучения', 'Развлечения', 'Мультики', '0+']
	const enLang = ['Sport', 'Educational', 'Attractive', 'Cartoon', '0+']

	const handleLangChange = (lang) => {
		setSelectedLang(lang)
	}

	return (
		<>
			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='light'
				transition='Bounce'
			/>
			<ToastContainer />
			<Bgr />

			<div className='login-container'>
				<div className='card'>
					<div className='cardInfo'>
						<img src={logo} />

						<h1>Control Kids</h1>
					</div>
					<div className='cardLogin'>
						<h2 className='login-text'>Kategoriyani tanglang!!!</h2>
						<div className='lang'>
							<button onClick={() => handleLangChange('uz')}>
								<img src={uz} alt='' />
							</button>
							<button onClick={() => handleLangChange('ru')}>
								<img src={ru} alt='' />
							</button>
							<button onClick={() => handleLangChange('en')}>
								<img src={en} alt='' />
							</button>
						</div>
						<form className='form'>
							{selectedLang === 'uz'
								? uzLang.map((item, index) => (
										<div className='check' key={index}>
											<input
												type='checkbox'
												value={index + 1}
												onChange={(e) =>
													setSelectedCheckboxes(
														e.target.checked
															? [...selectedCheckboxes, e.target.value]
															: selectedCheckboxes.filter(
																	(item) => item !== e.target.value
															  )
													)
												}
											/>
											<label htmlFor={`checkbox${index + 1}`}>{item}</label>
										</div>
								  ))
								: selectedLang === 'ru'
								? ruLang.map((item, index) => (
										<div className='check' key={index}>
											<input
												type='checkbox'
												value={index + 1}
												onChange={(e) =>
													setSelectedCheckboxes(
														e.target.checked
															? [...selectedCheckboxes, e.target.value]
															: selectedCheckboxes.filter(
																	(item) => item !== e.target.value
															  )
													)
												}
											/>
											<label htmlFor={`checkbox${index + 1}`}>{item}</label>
										</div>
								  ))
								: enLang.map((item, index) => (
										<div className='check' key={index}>
											<input
												type='checkbox'
												value={index + 1}
												onChange={(e) =>
													setSelectedCheckboxes(
														e.target.checked
															? [...selectedCheckboxes, e.target.value]
															: selectedCheckboxes.filter(
																	(item) => item !== e.target.value
															  )
													)
												}
											/>
											<label htmlFor={`checkbox${index + 1}`}>{item}</label>
										</div>
								  ))}
						</form>
						<ApiCall selectedCheckboxes={selectedCheckboxes} />
					</div>
				</div>
			</div>
		</>
	)
}
