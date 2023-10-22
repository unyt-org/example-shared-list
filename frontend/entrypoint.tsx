import { Theme } from "uix/base/theme.ts";
import { Lists } from "../backend/lists.ts";
import { List } from "../common/List.tsx";
import { Overview } from "../common/Overview.tsx";
import { Entrypoint } from "uix/html/entrypoints.ts";
import { lazy } from "uix/html/entrypoint-providers.tsx";

Theme.setMode("dark")
List;

export default {
	'/:id': lazy(async (_, {id}) => {
		return <List list={await Lists.get(id)}/> // render the list component
	})
} satisfies Entrypoint;
