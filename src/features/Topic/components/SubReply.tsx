import { Reply } from "../utils/defs";
import User from "./User";
import { DEFAULT_PREVIEW_OPTIONS } from "@components/create-post/defs";
import MDEditor from "@uiw/react-md-editor";
import React from "react";
import { NavLink } from "react-router-dom";

type SubReplyProps = Reply;

const SubReply: React.FC<SubReplyProps> = ({ id, content, userStatus: { identity, isOwner } }) => {
	return (
		<div className="subreply mt-3 flex w-full flex-col gap-3 rounded-md bg-white px-6 pb-5 pt-5 shadow-lg">
			<User {...{ identity, isOwner }} />
			<div className="content flex w-full flex-col gap-5">
				<MDEditor.Markdown source={content} {...DEFAULT_PREVIEW_OPTIONS} />
			</div>
			<NavLink
				to={`#${id}`}
				className="ml-auto select-none items-center gap-2 rounded-lg px-3 py-1 text-[#808080] duration-100 hover:cursor-pointer hover:bg-gray-100"
			>
				Jump to Reply
			</NavLink>
		</div>
	);
};

export default SubReply;
