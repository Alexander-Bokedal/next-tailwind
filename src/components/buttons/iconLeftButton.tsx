
const IconLeftButton = () => {
  return (
    <button
      className="bg-indigo-500 text-white font-semibold py-2 px-6 rounded-md flex items-center justify-center hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-200"
      type="button"
    >
      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M9 5a7 7 0 1114 7 7 7 0 01-7 7 7 7 0 01-7-7z" clipRule="evenodd" />
      </svg>
      Button with Icon
    </button>
  );
};
export default IconLeftButton;
