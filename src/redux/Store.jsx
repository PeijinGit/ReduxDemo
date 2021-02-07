//从redux中引入最核心的createStore,用于创建最核心的store对象
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
//引入index可以省略不写
import reducers from "./reducers";

export default createStore(reducers,composeWithDevTools( applyMiddleware(thunk)))