import { StorageBase } from './model/model.js';

const storage = new StorageBase(window.localStorage);

export { storage };
export { type Storage, StorageKey } from './model/model.js';
