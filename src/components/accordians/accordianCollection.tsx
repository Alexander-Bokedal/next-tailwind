import { accordionData } from "./accordianData";
import Accordion from "./accordian";
type PropsType = {
	onClose: () => void;
}
const AccordionCollection = ({ onClose }: PropsType) => {
	return (
		<div onClick={onClose} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
			<div onClick={e => e.stopPropagation()} className="bg-white p-6 rounded-lg shadow-lg w-2/6 h-4/6">
				<div className="flex flex-col">
					{accordionData.map(({ id, title, content }) => (
						<Accordion key={id} title={title} content={content} />
					))}
				</div>
			</div>
		</div>
	);
};

export default AccordionCollection;
