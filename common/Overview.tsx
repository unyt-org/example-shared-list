import { SharedList } from "backend/lists.ts";
import { map } from "datex-core-legacy/functions.ts";
import { template } from "uix/html/template.ts";
import { Component } from "uix/components/Component.ts";
import { logger } from "unyt_core/datex_all.ts";

let x = $$({a: "xa12"})

function tsversion(x:any) {
	logger.error("called", datex.meta)
	return $$(Deno.version.typescript)
}

// FIX: without ...map
@template(function(this: Overview) {
	return <div>
		<h1>Overview</h1>
		<button onclick:frontend={async () => {
			use("no-datex", x, tsversion); 
			const v = await tsversion({a:3});
			console.log(x, v.val)
			v.val = "2340";
		}}>click</button>
		{
			...map(this.options.lists, ([key, val]) => (
				<a href={`/${key}`}>{val.title}</a>
			))
		}
	</div>
})
export class Overview extends Component<{lists: Map<string, SharedList>}> {}