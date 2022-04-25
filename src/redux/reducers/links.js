const myLinkReducer = (state ="",action)=>{
    switch(action.type){
        case 'ADD_LINK':
            return action.payload
        case 'DELETE_LINK':
            return state=""
        default:
            return state
    }
}

export default myLinkReducer