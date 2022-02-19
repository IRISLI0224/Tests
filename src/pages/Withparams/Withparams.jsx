import { useParams } from "react-router"


export function Withparams (){
    const params = useParams();
    return(
        <h1>{params.id}</h1>
    )
}