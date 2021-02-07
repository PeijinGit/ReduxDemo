import { INCREMENT, DECREMENT } from "../action_types";

//设置初始化状态
let initState = 0;

export default function operaCount(preState = initState, action) {

    console.log("reducer--------start",action);
    //根据action中的type和data，决定该怎么操作
    const { type, data } = action
    let newState
    switch (type) {
        case INCREMENT:
            newState = preState + data
            //在reducer中不可修改传递过来的参数，必须新建参数返回
            return newState

        case DECREMENT:
            newState = preState - data
            return newState

        default:
            return preState
    }
}

