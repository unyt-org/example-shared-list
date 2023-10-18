import { Lists } from "../backend/lists.ts";
import { List } from "../common/components/List.tsx";
import "../common/theme.ts";
import { Overview } from "common/components/Overview.tsx";
import { Entrypoint } from "uix/html/entrypoints.ts";

export default {
	'/:id': async (_, {id}) => {
		return <List list={await Lists.get(id)}/> // render the list component
	}
} satisfies Entrypoint;
