import React, { useState, useEffect, useMemo } from 'react'
import '../Video/Video.css'
import YouTubePlayer from '../YouTube/YouTubePlayer'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

export default function Video({ isMuted }) {
	const videoUrls = useMemo(
		() => JSON.parse(localStorage.getItem('token')) || [],
		[]
	)
	const [selectedVideoIndex, setSelectedVideoIndex] = useState(null)
	const [playedVideos, setPlayedVideos] = useState([])

	useEffect(() => {
		const remainingVideos = videoUrls.filter(
			(video, index) => !playedVideos.includes(index)
		)
		if (remainingVideos.length === 0) {
			console.log('Видео больше нету')
			setPlayedVideos([]) // Очищаем массив playedVideos, чтобы видео повторялись
		} else {
			const randomIndex = Math.floor(Math.random() * remainingVideos.length)
			setSelectedVideoIndex(randomIndex)
		}
	}, [videoUrls, playedVideos])

	const handlePreviousVideo = () => {
		setSelectedVideoIndex(
			(prevIndex) => (prevIndex - 1 + videoUrls.length) % videoUrls.length
		)
	}

	const handleNextVideo = () => {
		setSelectedVideoIndex((prevIndex) => (prevIndex + 1) % videoUrls.length)
	}

	const handleVideoEnd = () => {
		if (selectedVideoIndex !== null) {
			setPlayedVideos((prevPlayedVideos) => [
				...prevPlayedVideos,
				selectedVideoIndex,
			])
		}
	}

	return (
		<div className='box'>
			<YouTubePlayer
				className='youtube'
				videoUrl={
					selectedVideoIndex !== null ? videoUrls[selectedVideoIndex].url : ''
				}
				isMuted={isMuted}
				onEnd={handleVideoEnd}
			/>

			<button className='left' onClick={handlePreviousVideo}>
				<FaAngleLeft className='box-icon' />
			</button>
			<button className='right' onClick={handleNextVideo}>
				<FaAngleRight className='box-icon' />
			</button>
		</div>
	)
}
