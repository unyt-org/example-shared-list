import { SharedList } from "./lists.ts";

// Declaration of list storage map as persistent pointer with default list
export const listStorage = new Map<string, SharedList>([[
	"jonas",
	$$({
		title: "Jonas Shopping List",
		items: $$(new Set([
			$$({
				name: "Milk",
				amount: 1,
				type: "Bottle",
				checked: false
			}),
			$$({
				name: "Butter",
				amount: 4,
				type: "Piece",
				checked: false
			}),
			$$({
				name: "Beer",
				amount: 2,
				type: "Bottle",
				checked: false
			})
		]))
	})
]]);