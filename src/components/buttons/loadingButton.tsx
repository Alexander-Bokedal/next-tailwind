
const LoadingButton = () => {
	return (
		<button
			className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-md flex items-center justify-center hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
			type="button"
			disabled
		>
			<svg className="w-5 h-5 animate-spin mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
				<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V2a10 10 0 00-10 10h2z"></path>
			</svg>
			Loading...
		</button>
	);
};
export default LoadingButton;
