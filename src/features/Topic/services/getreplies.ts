import { GRAPHQL_PATH, API } from "../../../services/api";

export interface ReplyProps {
	id: string;
	userIndex: number;
	counter: {
		likes: number;
		shares: number;
		replies: number;
	};
	content: string;
	activity: string;
	parent?: string;
}

export async function getReplies(topic_id: string, offset: number): Promise<ReplyProps[] | null> {
	const REPLY_QUERY = `
		query GetReply($input: GetInput!) {
			reply {
				getFromTopic(input: $input) {
					id
					userIndex
					counter {
						likes
						shares
						views
						replies
					}
					content
					activity
					parent
				}
			}
		}
	`;

	const response = await API.post(GRAPHQL_PATH, {
		query: REPLY_QUERY,
		variables: {
			input: {
				id: topic_id,
				offset,
			},
		},
	});

	const result = response.data.data.reply.getFromTopic;

	return result;
}