import React from "react";

interface UserProps {
	index: number;
}

const User: React.FC<UserProps> = ({ index }) => {
	return (
		<div className="flex text-xs items-center gap-1 leading-none select-none">
			<h1 className="bg-accent text-white rounded-full px-2 py-1 flex items-center justify-center">
				Anonymous #{index}
			</h1>
			{index === 0 && <h1 className="text-[#00A3FF] font-bold">OP</h1>}
		</div>
	);
};

export default User;
