import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import loginBtn from '../Login/image/button.png'

const ApiCall = ({ selectedCheckboxes }) => {
	const [responseData, setResponseData] = useState(null)
	const navigate = useNavigate()
	const [videoUrl, setVideoUrl] = useState([])
	const warn = () =>
		toast.warn('Kategoriyalardan birini tanglang!!!', {
			position: 'top-center',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
		})
	const err = () =>
		toast.error('Server error', {
			position: 'top-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
			transition: Bounce,
		})

	const sendDataToServer = async () => {
		if (selectedCheckboxes.length === 0) {
			console.log('Выберите хотя бы одну галочку')
			warn()
			return
		}

		try {
			const response = await axios.post(
				'http://localhost/give_url.php',
				selectedCheckboxes
			)
			setResponseData(response.data)
			setVideoUrl([videoUrl, response.data])
			localStorage.setItem('token', JSON.stringify(response.data))
			navigate('/')
			let url = localStorage.getItem('token')
			// console.log(response.data);
			console.log(url)
		} catch (error) {
			console.error('Error:', error)
			err()
		}
	}

	return (
		<>
			<button className='login-btn' onClick={sendDataToServer}>
				<img src={loginBtn} className='btn-bg' alt='' />
			</button>
			{responseData && <div>Response data: {responseData}</div>}
		</>
	)
}

export default ApiCall
