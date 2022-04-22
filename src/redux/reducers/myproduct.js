const myProReducer = (state ={},action)=>{
    switch(action.type){
        case 'ADD':
            return action.payload
        case 'DELETE':
            return state={}
        default:
            return state
    }
}

export default myProReducer