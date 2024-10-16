import { listStorage } from "./lists.eternal.ts";

export type ListItem = {
	name: string,
	checked?: boolean,
	amount?: number,
	type?: string
}

export type SharedList = {
	title: string,
	items: ListItem[]
}

export class Lists {
	static async get(id: string): Promise<SharedList> {
		// create new list if none exists
		if (!await listStorage.has(id)) {
			await listStorage.set(id, {
				title: id,
				items: []
			});
		}
		return (await listStorage.get(id))!;
	}
}