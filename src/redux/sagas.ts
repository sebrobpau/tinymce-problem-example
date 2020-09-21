import {call, all, fork, put, takeEvery} from "redux-saga/effects";
import {ActionTypes, resourceFetched} from "./actions";
import apiCaller from "./apiCaller";

function* postResourceFetch(action: any): Generator {
    const url = `${action.meta.url}`;
    const res: any = yield call(apiCaller, action.meta.method, url);
    return res;
}

function* handleResourceFetch(action: any): Generator {
    const res = yield postResourceFetch(action);
    const response = res as any;
    yield put(resourceFetched(response));
}

function* watchResourceFetch(): Generator {
    yield takeEvery(ActionTypes["resource/fetch"], handleResourceFetch);
}

export default function* resourceSaga(): Generator {
    yield all([fork(watchResourceFetch)]);
}
