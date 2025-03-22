
'use client'


import { useState } from "react"
import AccordionCollection from "./accordians/accordianCollection"
const ExpandableAccordians = () => {
	const [open, setOpen] = useState(false)
	const handleClick = () => {
		setOpen((prev: boolean) => !prev)
		console.log('Hej hej')
	}
	return (
		<>
			<div onClick={handleClick} className="cursor-pointer  hover:bg-gray-400 hover:scale-105 transition-all duration-150 border p-4 w-full max-w-sm text-center bg-gray-100 rounded-lg shadow-md">
				<p className="text-4xl font-light uppercase tracking-[.3em]  text-gray-900">
					Accordians
				</p>
			</div>

			{open && < AccordionCollection onClose={handleClick} />}
		</>
	)
}

export default ExpandableAccordians;
