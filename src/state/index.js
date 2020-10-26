import { createStore, applyMiddleware } from "redux";
import reducers from "./ducts";
import { createLogger } from "redux-logger";

const logger = createLogger();

export const store = createStore(
    reducers,
  applyMiddleware(logger)
);

export const persistor = store;
