const SEND_MASSAGE = 'SEND-MASSAGE';


let initialState = {
    dialogsData: [
        {name: 'Tanya', id: 1},
        {name: 'Oleg', id: 2},
        {name: 'Dima', id: 3},
        {name: 'Props', id: 4}
    ],
    massagesData: [
        {massage: 'Hello!', id: 1},
        {massage: 'How are you', id: 2},
        {massage: '...', id: 3},
        {massage: 'props easy', id: 4}
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MASSAGE:
            return {
                ...state,
                massagesData: [...state.massagesData, {massage: action.newMessageBody, id: 5}]
            };

        default:
            return state;
    }
}

export let sendMassageActionCreator = (newMessageBody) => {
    return {
        type: 'SEND-MASSAGE', newMessageBody
    }
}


export default dialogsReducer;