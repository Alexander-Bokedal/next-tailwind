'use client'

import Button1 from "./button1";
import Button2 from "./button2";
import Button3 from "./button3";
import Button4 from "./button4";
import Button5 from "./button5";
import Button6 from "./button6";
import Button7 from "./button7";
import Button8 from "./button8";
import Button9 from "./button9";
import Button10 from "./button10";
import Button11 from "./button11";
import Button12 from "./button12";
import LoadingButton from "./loadingButton";
import IconLeftButton from "./iconLeftButton";
type ButtonCollectionProps = {
	onClose: () => void;
};

const ButtonCollection: React.FC<ButtonCollectionProps> = ({ onClose }) => {
	return (
		<div onClick={onClose} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
			<div onClick={e => e.stopPropagation()} className="bg-white p-6 rounded-lg shadow-lg w-2/6 h-4/6">
				<div className="grid grid-cols-2 gap-4">
					<Button1 />
					<Button2 />
					<Button3 />
					<Button4 />
					<Button5 />
					<Button6 />
					<Button7 />
					<Button8 />
					<Button9 />
					<Button10 />
					<Button11 />
					<Button12 />
					<LoadingButton />
					<IconLeftButton />
				</div>
			</div>
		</div>
	);
}

export default ButtonCollection;
