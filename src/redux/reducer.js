const initialState = {
    personData: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PERSON':
            return {
                personData:[...state.personData, action.payload]
            }
        case 'DELETE_PERSON':
            return {
                personData:state.personData.filter((person) => person.id !== action.id)
            }
        default:
            return state
    }
}

export default reducer