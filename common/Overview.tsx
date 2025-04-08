import { SharedList } from "backend/lists.ts";
import { template } from "uix/html/template.ts";
import { Component } from "uix/components/Component.ts";
import { StorageMap } from "datex-core-legacy/datex_all.ts";

@template(async ({lists}) => {
    const entries = await lists.entriesArray();
    return <div>
      <h1>Overview</h1>
      {entries.map(([key, val]) => (
        <a href={`/${key}`}>{val.title}</a>
      ))}
    </div>
})
export class Overview
  extends Component<{ lists: StorageMap<string, SharedList> }> {}
