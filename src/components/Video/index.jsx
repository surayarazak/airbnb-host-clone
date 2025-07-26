import { useState, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

export default function VideoPlayer({ index, videoRefs, onPlay, videoUrl }) {
	const [isPlaying, setIsPlaying] = useState(false);
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const video = videoRefs.current[index];
		if (!video) return;

		const updateProgress = () => {
			const percent = (video.currentTime / video.duration) * 100;
			setProgress(isNaN(percent) ? 0 : percent);
		};

		const handleEnded = () => {
			setIsPlaying(false);
			setProgress(0);
		};

		video.addEventListener("timeupdate", updateProgress);
		video.addEventListener("ended", handleEnded);

		return () => {
			video.removeEventListener("timeupdate", updateProgress);
			video.removeEventListener("ended", handleEnded);
		};
	}, [index, videoRefs]);

	useEffect(() => {
		videoRefs.current[index] = videoRefs.current[index] || null;
	}, [index, videoRefs]);

	const togglePlay = () => {
		const video = videoRefs.current[index];
		if (!video) return;

		if (isPlaying) {
			video.pause();
			setIsPlaying(false);
		} else {
			onPlay(index);
			video.play();
			setIsPlaying(true);
		}
	};

	const RADIUS = 16;
	const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
	const strokeDashoffset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE;

	return (
		<div className="relative w-full rounded-xl overflow-hidden">
			<video
				ref={(el) => (videoRefs.current[index] = el)}
				className="w-full h-full object-cover"
				playsInline
				preload="auto"
				crossOrigin="anonymous">
				<source src={videoUrl} type="video/mp4" />
			</video>

			{/* Bottom-left Play/Pause Button with Circular Progress */}
			<button
				onClick={togglePlay}
				className="absolute bottom-2.5 left-2.5 z-10 group focus:outline-none">
				<div className="relative w-8 h-8">
					<svg
						className={`absolute top-0 left-0 w-full h-full transform -rotate-90 ${
							isPlaying ? "z-20" : ""
						}`}
						viewBox="0 0 40 40">
						<circle
							cx="20"
							cy="20"
							r={RADIUS}
							fill="none"
							stroke="#fff" // tailwind green-500
							strokeWidth="3"
							strokeDasharray={CIRCUMFERENCE}
							strokeDashoffset={strokeDashoffset}
							strokeLinecap="round"
						/>
					</svg>
					<div className="w-full h-full flex items-center justify-center rounded-full bg-gray-400/80 backdrop-blur-sm group-hover:scale-105 transition">
						{isPlaying ? (
							<FaPause size={14} className="text-white" />
						) : (
							<FaPlay size={14} className="pl-0.5 text-white" />
						)}
					</div>
				</div>
			</button>
		</div>
	);
}
