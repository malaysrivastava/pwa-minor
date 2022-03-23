import React,{useState,useEffect} from "react";
import View from './Footer-view'


const Footer = () => {

  const [show,setShow] = useState(true);
  var excp = window.location.pathname;

  useEffect(()=>{
  console.log(excp)
    if(excp=='/login'){
      setShow(false);
    }else{
      setShow(true);
    }
  },[2])

  if(show){
return (
	<div>
        <View/>
        </div>
);
} else{
  return (<></>)
}
};
export default Footer;
