import {all, fork} from "redux-saga/effects";
import documentSaga from "./sagas";

export default function* rootSaga() {
    yield all([fork(documentSaga)]);
}
