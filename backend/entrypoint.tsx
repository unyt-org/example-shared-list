import { Overview } from "../common/Overview.tsx";
import { listStorage } from "backend/lists.eternal.ts";
import { Entrypoint } from "uix/html/entrypoints.ts";

// The frontend routes definition
export default {
	'/': <Overview lists={listStorage}/>,
	'*': null
} satisfies Entrypoint;