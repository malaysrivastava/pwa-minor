export const increment = ()=>{
    return{
        type: 'INCREMENT'
    };
};
export const decrement = ()=>{
    return{
        type: 'DECREMENT'
    };
};

export const user_in = (data)=> {
    return{
        type: 'ADD',
        payload: data
    }
}
export const login =()=> {
    return {
        type: 'SIGN_IN'
    }
}

export const logout =()=> {
    return {
        type: 'SIGN_OUT'
    }
}

export const link_in = (data)=>{
    return{
        type:'ADD_LINK',
        payload:data
    } 
}


export const link_out = (data)=>{
    return{
        type:'DELETE_LINK',
        payload:data
    } 
}

export const product_in = (data)=> {
    return{
        type: 'ADD',
        payload: data
    }
}
export const product_out = ()=> {
    return{
        type: 'DELETE'
    }
}