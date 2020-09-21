import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly";
import reduxImmutableStateVariant from "redux-immutable-state-invariant";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState: any) {
    const composeEnhancers = composeWithDevTools({trace: true, traceLimit: 25});
    const middlewares = composeEnhancers(
        applyMiddleware(reduxImmutableStateVariant(), sagaMiddleware)
    );
    const store = createStore(rootReducer, initialState, middlewares);
    sagaMiddleware.run(rootSaga);
    return store;
}
