import { Lists } from "../backend/lists.ts";
import { List } from "../common/List.tsx";
import { type Entrypoint } from "uix/providers/entrypoints.ts";

export default {
  "/:id": async (_ctx, { id }) => {
    const list = await Lists.get(id);
    return <List items={list.items} title={list.title} />; // render the list component
  },
} satisfies Entrypoint;
