import { Lists } from "../backend/lists.ts";
import { List } from "../common/List.tsx";
import { type Entrypoint } from "uix/providers/entrypoints.ts";
import { lazy } from "uix/providers/common.tsx";


export default {
	'/:id': lazy(async (_, {id}) => {
		const list = await Lists.get(id);

		return <List items={list.items} title={list.title}/> // render the list component
	})
} satisfies Entrypoint;

