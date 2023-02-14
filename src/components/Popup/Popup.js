import React, { useState, useEffect } from "react";
import "./Popup.css";

function Popup({ setisPopupOpen }) {
	const [step, setStep] = useState(1);
	const [time, setTime] = useState(0);

	useEffect(() => {
		let timer = null;
		if (step === 2) {
			timer = setInterval(() => {
				setTime((time) => time + 1);
			}, 1000);
		} else {
			setTime(0);
		}
		return () => clearInterval(timer);
	}, [step]);

	function handleNext() {
		setStep((step) => step + 1);
	}

	function handlePrev() {
		setStep((step) => step - 1);
	}

	function handleClose() {
		setisPopupOpen(false);
	}

	return (
		<div className="popup">
			<div className="popup-content">
				{step === 1 && <p>This is popup step 1</p>}
				{step === 2 && (
					<p>
						Timer:{" "}
						{new Date(time * 1000).toISOString().substr(11, 8)}
					</p>
				)}
				{step === 3 && <p>The assignment is complete!</p>}
				<div className="navigation">
					<button disabled={step === 1} onClick={handlePrev}>
						Prev
					</button>
					<button disabled={step === 3} onClick={handleNext}>
						Next
					</button>
					<button className="close-button" onClick={handleClose}>
						Close
					</button>
				</div>
			</div>
		</div>
	);
}

export default Popup;
