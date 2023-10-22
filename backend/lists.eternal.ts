import { SharedList } from "./lists.ts";

/**
 * Create a new list storage map with default values.
 * Because this is an exported value from a ".eternal.ts" module, 
 * the state will be saved persistently and can still be accessed after restart
 */
export const listStorage = new Map<string, SharedList>([[
	"jonas",
	{
		title: "Jonas Shopping List",
		items: new Set([
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
		])
	}
]]);
