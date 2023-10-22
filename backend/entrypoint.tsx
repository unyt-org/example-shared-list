import { Overview } from "../common/Overview.tsx";
import { listStorage } from "backend/lists.eternal.ts";
import { renderBackend, renderStatic } from "uix/base/render-methods.ts";
import { Entrypoint } from "uix/html/entrypoints.ts";
import { List } from "common/List.tsx";
import { lazy } from "uix/html/entrypoint-providers.tsx";
import { Lists } from "backend/lists.ts";

// The frontend routes definition
export default {
	'/': renderStatic(<Overview lists={listStorage}/>), // On '/'-route display the overview component
	// '/:id': lazy(async (_, {id}) => {
	// 	return renderBackend(<List list={await Lists.get(id)}/>) // render the list component
	// }),
	'*': null // Letting the frontend handle all other routes
} satisfies Entrypoint;