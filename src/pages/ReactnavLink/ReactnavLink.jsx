import { NavLink } from "react-router-dom";

export function ReactnavLink (){

    return(
      <div>
       <NavLink style={({isActive})=>{
           return{
               color:isActive ?'red':'green'
           }
       }} to='/react-nav-link'>NavLink</NavLink>
       <br/>
       <br/>
       <NavLink style={({isActive})=>{
        return{
            color:isActive ?'red':'green'
        }
    }} to='/'>Home</NavLink>
    </div>
    )
}