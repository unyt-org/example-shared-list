import "common/theme.ts";
import { Overview } from "common/components/Overview.tsx";
import { listStorage } from "backend/lists.eternal.ts";
import { renderStatic } from "uix/html/render-methods.ts";
import { Entrypoint } from "uix/html/entrypoints.ts";

// The frontend routes definition
export default {
	'/': renderStatic(<Overview lists={listStorage}/>), // On '/'-route display the overview component
	'*': null // Letting the frontend handle all other routes
} satisfies Entrypoint;