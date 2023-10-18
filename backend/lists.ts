import { listStorage } from "./lists.eternal.ts";

// The list item type definition
export type ListItem = {
	name: string,
	checked?: boolean,
	amount?: number,
	type?: string
}

// The shared list type definition
export type SharedList = {
	title: string,
	items: Set<ListItem>
}

// Expose this class as public endpoint property
@endpoint export class Lists {

	@property static async get(id: string) {
		if (!listStorage.has(id)) {
			// create new list
			const newList: SharedList = {
				title: id,
				items: $$(new Set())
			}
			listStorage.set(id, $$(newList));
		}
		return listStorage.get(id)!;
	}

}