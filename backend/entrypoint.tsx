import { Overview } from "../common/Overview.tsx";
import { listStorage } from "backend/lists.eternal.ts";
import { Entrypoint } from "uix/providers/entrypoints.ts";

if (await listStorage.getSize() === 0) {
	await listStorage.set(
		"jonas",
		{
			title: "Jonas Shopping List",
			items: [
				{
					name: "Milk",
					amount: 1,
					type: "Bottle",
					checked: false
				},
				{
					name: "Butter",
					amount: 4,
					type: "Piece",
					checked: false
				},
				{
					name: "Beer",
					amount: 2,
					type: "Bottle",
					checked: false
				}
			]
		}
	);
}

// The frontend routes definition
export default {
	'/': <Overview lists={listStorage}/>,
	'*': null
} satisfies Entrypoint;