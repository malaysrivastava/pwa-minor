import axios from "axios"

export const googleLogin = async(token)=>{
    return await axios({
        method:"POST",
        url:"https://juit-olx-app.herokuapp.com/api/googlelogin",
        data:{tokenId:token}
    })
}