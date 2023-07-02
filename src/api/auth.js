import axios from "axios"

export const googleLogin = async(token)=>{
    return await axios({
        method:"POST",
        url:"https://juitolx-malay.b4a.run/api/googlelogin",
        data:{tokenId:token}
    })
}