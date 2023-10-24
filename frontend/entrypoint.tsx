import { Lists } from "../backend/lists.ts";
import { List } from "../common/List.tsx";
import { Entrypoint } from "uix/html/entrypoints.ts";
import { lazy } from "uix/html/entrypoint-providers.tsx";


export default {
	'/:id': lazy(async (_, {id}) => {
		return <List list={await Lists.get(id)}/> // render the list component
	})
} satisfies Entrypoint;

