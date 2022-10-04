const  Percentage = ({oprice,dprice})=> {
const res = Math.floor((oprice - dprice)/(oprice)*100)
if(res < 0){
    return "something wrong"
 }
 else{
    return + "  "+ res+"%" + "off"
 }
}

export default Percentage;