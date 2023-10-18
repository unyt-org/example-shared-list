import { type SharedList } from "backend/lists.ts";
import { map, always } from "datex-core-legacy/functions.ts";
import { template } from "uix/html/anonymous-components.ts";
import { UIXComponent } from "uix/components/UIXComponent.ts";

@template(function(this: List) {
	return <div>
		<div class="header">
			<h1>{this.options.$.list.$.title}</h1>
		</div>
		<ol>
			{
				map(this.options.list.items, (item, index) => 
					<li data-checked={item.$.checked}>
						<input type="checkbox" checked={item.$.checked} id={`checkbox-${index}`}/>
						<label for={`checkbox-${index}`}>{item.$.name}</label>
						<span>{item.$.amount} {item.$.type}{always(()=>item.amount! > 1 ? 's': '')}</span>
					</li>
				)
			}
		</ol>
		<div class="button add-button" onclick:frontend={() => this.dialog.showModal()}>
			Add Item
		</div>
		<div class="button remove-button" onclick:frontend={() => this.removeChecked()}>
			Cleanup
		</div>
		<dialog id="dialog" onclick:frontend={function (this:HTMLDialogElement, event:Event) { if (event.target == this) this.close()}}>
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
export class List extends UIXComponent<UIXComponent.Options & {list: SharedList}> {
	/** references to the DOM elements */
	@id declare name: HTMLInputElement;
	@id declare amount: HTMLInputElement;
	@id declare type: HTMLOptionElement;
	@id declare dialog: HTMLDialogElement;

	// Cleanup method that removes all checked items
	private removeChecked() {
		for (const item of [...this.options.list.items]) {
			if (item.checked) {
				console.info("Deleting item:", item)
				this.options.list.items.delete(item)
			}
		}
	}

	// Method that adds an item to the list
	private addItem() {
		if (!this.name.value)
			return alert("Please enter a name");
		
		console.log("add",{
			checked: false,
			name: this.name.value,
			amount: Number(this.amount.value),
			type: this.type.value,
		})
		this.options.list.items.add($$({
			checked: false,
			name: this.name.value,
			amount: Number(this.amount.value),
			type: this.type.value,
		}));

		this.dialog.close()
	}
}