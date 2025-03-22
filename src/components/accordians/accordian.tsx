import React, { useState } from 'react';

type PropsData = {
	title: string,
	content: string
}
const Accordion = ({ title, content }: PropsData) => {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className="border border-black bg-cyan-950 w-96">
			<div className="border border-black bg-green-950" onClick={() => setIsActive(!isActive)}>
				<div>{title}</div>
				<div>{isActive ? '-' : '+'}</div>
			</div>
			<div
				className={`overflow-hidden transition-all duration-1000 ease-in-out ${isActive ? 'max-h-screen' : 'max-h-0'
					}`}
			>
				{isActive && <div className="border border-cyan-500">{content}</div>}
			</div>
		</div>
	);
};

export default Accordion;
