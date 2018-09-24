import { takeEvery, all, select } from "redux-saga/effects";
import fetchData from "../api/call-data";

const getValueSearch = (state) => state.DataDetailScreen.Search;  // รับค่าจาก state

function* callData() {    // เรียกฐานข้อมูลแบบ =
    const CheckValueKey = yield select(getValueSearch);
    fetchData(CheckValueKey);
}

//ตรวจจับ action types
export function* watchDetail() {
    yield takeEvery('CALL_DATA_DETAIL', callData);        //จับ Type 'CALL_DATA_IS'
}

//รวม Saga ไว้
export default function* DetailSaga() {
    yield all([
        watchDetail()
    ])
}
