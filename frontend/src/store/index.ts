import { createStore } from "redux";
import { Reducers } from "./reducers";
export const store = createStore(Reducers);

export type RootState = ReturnType<typeof store.getState>;
