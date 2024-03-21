import React, { useState } from 'react'
import './Home.css'
import Video from './Video/Video'
import Bgr from '../Bgr/Bgr'
import { IoMdExit } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa'

function Home() {
	const [isMuted, setIsMuted] = useState(true)

	const toggleMute = () => {
		setIsMuted((prevMuted) => !prevMuted)
	}

	const navigate = useNavigate()

	const handleLogout = async () => {
		try {
			localStorage.removeItem('token')
			localStorage.removeItem('user')

			navigate('/login')
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<>
			<Bgr />

			<div className='wrapper'>
				<div className='video-container'>
					<div className='nav'>
						<Video isMuted={isMuted} />
						<div className='video-footer'>
							<button className='mute' onClick={toggleMute}>
								{isMuted ? (
									<FaVolumeMute className='muteIcon' />
								) : (
									<FaVolumeUp className='muteIcon' />
								)}
								{isMuted ? <span>Mute</span> : <span>Unmuted</span>}
							</button>
							<button className='exit' onClick={handleLogout}>
								<IoMdExit className='exitIcon' />
								<span>Exit</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home
