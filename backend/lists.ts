// deno-lint-ignore-file require-await
import { listStorage } from "./lists.eternal.ts";

export type ListItem = {
	name: string,
	checked?: boolean,
	amount?: number,
	type?: string
}

export type SharedList = {
	title: string,
	items: Set<ListItem>
}

export class Lists {
	static async get(id: string) {
		// create new list if none exists
		if (!listStorage.has(id)) {
			listStorage.set(id, {
				title: id,
				items: new Set()
			});
		}
		return listStorage.get(id)!;
	}
}