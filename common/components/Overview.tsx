import { SharedList } from "backend/lists.ts";
import { map } from "datex-core-legacy/functions.ts";
import { template } from "uix/html/anonymous-components.ts";
import { UIXComponent } from "uix/components/UIXComponent.ts";

@template(function(this: Overview) {
	return <div>
		<h1>Overview</h1>
		{
			map(this.options.lists, ([key, val]) => (
				<a href={`/${key}`}>{val.title}</a>
			))
		}
	</div>
})
export class Overview extends UIXComponent<{lists: Map<string, SharedList>}> {}