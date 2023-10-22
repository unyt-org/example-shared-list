import { ListItem, type SharedList } from "backend/lists.ts";
import { map, always } from "datex-core-legacy/functions.ts";
import { template } from "uix/html/anonymous-components.ts";
import { Component } from "uix/components/Component.ts";
import { ObjectRef } from "unyt_core/runtime/pointers.ts";

@template(function(this: List) {
	return <div>
		<div class="header">
			<h1>{this.options.$.list.$.title}</h1>
		</div>
		<ol>
			{
				map(this.options.list.items as Set<ObjectRef<ListItem>>, (item, index) => 
					<li data-checked={item.$.checked}>
						<input type="checkbox" checked={item.$.checked} id={`checkbox-${index}`}/>
						<label for={`checkbox-${index}`}>{item.$.name}</label>
						<span>{item.$.amount} {item.$.type}{always(()=>item.amount! > 1 ? 's': '')}</span>
					</li>
				)
			}
		</ol>
		<button class="add-button" onclick:frontend={() => this.dialog.showModal()}>
			Add Item
		</button>
		<button class="remove-button" onclick:frontend={() => this.removeChecked()}>
			Cleanup
		</button>
		<dialog id="dialog" onclick:frontend={function (e) { if (e.target == this) this.close()}}>
			<input placeholder="Enter item name" type="text" id="name"/>
			<input placeholder="Enter amount" type="number" id="amount" value={1} max={99}/>
			<select id="type">
				<option>Bottle</option>
				<option>Piece</option>
				<option>Whatever</option>
			</select>
			<div id="add" onclick:frontend={() => this.addItem()}>Add</div>
		</dialog>
	</div>
})
export class List extends Component<{list: SharedList}> {
	
	/** references to the DOM elements */
	@id declare name: HTMLInputElement;
	@id declare amount: HTMLInputElement;
	@id declare type: HTMLOptionElement;
	@id declare dialog: HTMLDialogElement;

	/**
	 * Remove all checked items
	 */
	private removeChecked() {
		[...this.options.list.items]
			.filter(item => item.checked)
			.forEach(item => this.options.list.items.delete(item))
	}

	/**
	 * Add a new item to the list
	 */
	private addItem() {
		if (!this.name.value)
			return alert("Please enter a name");

		this.options.list.items.add({
			checked: false,
			name: this.name.value,
			amount: Number(this.amount.value),
			type: this.type.value,
		});

		this.dialog.close()
	}
}