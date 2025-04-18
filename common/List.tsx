import { type ListItem } from "backend/lists.ts";
import { template } from "uix/html/template.ts";
import { Component } from "uix/components/Component.ts";

@template(function({ title, items }) {
  return (
    <div>
      <div class="header">
        <h1>{title}</h1>
      </div>
      <ol>
        {items.map((item, index) => (
          <li>
            <input
              type="checkbox"
              checked={item.checked}
              id={`checkbox-${index}`}
            />
            <label for={`checkbox-${index}`}>{item.name}</label>
            <span>{item.amount} {item.type}{item.amount! > 1 ? "s" : ""}</span>
          </li>
        ))}
      </ol>
      <button
        type="button"
        class="add-button"
        onclick:frontend={() => this.dialog.showModal()}
      >
        Add item
      </button>
      <button
        type="button"
        class="remove-button"
        onclick:frontend={() => this.removeChecked()}
      >
        Cleanup
      </button>
      <dialog
        id="dialog"
        onclick:frontend={function (e) {
          if (e.target == this) this.close();
        }}
      >
        <input placeholder="Enter item name" type="text" value={this.name} />
        <input
          placeholder="Enter amount"
          type="number"
          value={this.amount}
          max={99}
        />
        <select id="type" value={this.type}>
          <option name="bottle">Bottle</option>
          <option name="piece">Piece</option>
          <option name="whatever">Whatever</option>
        </select>
        <button type="button" onclick:frontend={() => this.addItem()}>
          Add
        </button>
      </dialog>
    </div>
  );
})
export class List extends Component<{ title: string; items: ListItem[] }> {
  /** references to the DOM elements */
  @property name = "";
  @property amount = 1;
  @property type = "bottle";
  @id dialog!: HTMLDialogElement;

  /**
   * Remove all checked items
   */
  private removeChecked() {
    const items = this.properties.items;
    items.splice(0, items.length, ...items.filter((e) => !e.checked))
    globalThis.location.reload();
  }

  /**
   * Add a new item to the list
   */
  private addItem() {
    if (!this.name) {
      return alert("Please enter a name");
    }
    val(this.properties.items).push({
      checked: false,
      name: val(this.name),
      amount: val(this.amount),
      type: val(this.type),
    });
    this.dialog.close();
    this.name = "";
  }
}
