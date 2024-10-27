import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function Slide() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const handleNext = () => {
		if (currentSlide === 0) {
			setCurrentSlide(1);
		}
	};

	const handleBack = () => {
		if (currentSlide === 1) {
			setCurrentSlide(0);
		}
	};

	return (
		<div className="w-screen h-screen grid place-content-center bg-gray-100">
			<div className="w-96 h-96 overflow-hidden relative">
				{/* Slider wrapper */}
				<div
					className={`flex transition-transform duration-500 ease-in-out`}
					style={{ transform: `translateX(-${currentSlide * 100}%)` }}
				>
					{/* First Slide */}
					<div className="w-full h-96 bg-blue-500 flex items-center justify-center shrink-0">
						<h2 className="text-white text-2xl">First Slide</h2>
					</div>

					{/* Second Slide */}
					<div className="w-full h-96 bg-red-500 flex items-center justify-center shrink-0">
						<h2 className="text-white text-2xl">Second Slide</h2>
					</div>
				</div>

				{/* Conditional Next Button */}
				{currentSlide === 0 && (
					<button
						onClick={handleNext}
						className="absolute bottom-5 right-5 bg-gray-800 text-white px-4 py-2 rounded"
					>
						Next
					</button>
				)}

				{/* Conditional Back Button */}
				{currentSlide === 1 && (
					<button
						onClick={handleBack}
						className="absolute bottom-5 left-5 bg-gray-800 text-white px-4 py-2 rounded"
					>
						Back
					</button>
				)}
			</div>
		</div>
	);
}
