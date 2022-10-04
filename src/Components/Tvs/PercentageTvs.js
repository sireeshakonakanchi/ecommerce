 

 export const PercentageTvs = ({oprice,dprice})=>{
  const discount =  Math.floor((oprice-dprice)/(oprice)*100);
  if(discount < 0){
   return "*some went wrong"
  }
  else{
 return  + "  "+ discount+" " +"%" + "off"
  }
 }