import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux";
import createSagaMiddleware from 'redux-saga';
import { inputReducer1 } from "./slices/inputReducer1";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const sagaMiddleware = createSagaMiddleware();

const allReducers = combineReducers({
        input1:inputReducer1,
        // input2: inputReducer2,
        // operation: operationReducer,
        // selectedInput: selectedInputReducer,
        // result: resultReducer
});

export function* helloSaga() {
    console.log('Hello Sagas!')
  }

export const store = createStore(allReducers,
    composeEnhancers(
        applyMiddleware(sagaMiddleware)
    )
)

sagaMiddleware.run(helloSaga)
