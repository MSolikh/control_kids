import React from 'react'
import ReactPlayer from 'react-player/youtube'
import './YouTubePlayer.css'

const YouTubePlayer = ({ videoUrl, isMuted }) => {
	return (
		<div className='player-wrapper'>
			<ReactPlayer
				className='react-player'
				url={videoUrl} // Используйте свойство videoUrl, а не videoUrls
				width='100%'
				height='100%'
				controls={false}
				playing={true}
				loop={true}
				muted={isMuted}
				config={{
					youtube: {
						playerVars: {
							showRelatedVideos: false,
							modestbranding: 1, // Отключить логотип YouTube
							iv_load_policy: 3, // Отключить информацию о видео (заголовок, имя канала и т. д.)
						},
					},
				}}
			/>
		</div>
	)
}

export default YouTubePlayer
