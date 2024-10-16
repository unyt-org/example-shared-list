import { StorageMap } from "datex-core-legacy/datex_all.ts";
import { SharedList } from "./lists.ts";

/**
 * Create a new list storage map with default values.
 * Because this is an exported value from a ".eternal.ts" module, 
 * the state will be saved persistently and can still be accessed after restart
 */
export const listStorage = new StorageMap<string, SharedList>();
