

const Button1 = () => {
	return (
		<button
			className="w-60 bg-red-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-200 ease-in-out transform active:scale-95"
			type="button"
			title="Button 1"
			onClick={() => { console.log('Button 1') }}
		>
			Button 1
		</button>
	);
}

export default Button1;
