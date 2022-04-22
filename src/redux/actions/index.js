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


export const my_product = (data)=> {
    return{
        type: 'ADD',
        payload: data
    }
}