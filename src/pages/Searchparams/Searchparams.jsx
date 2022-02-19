import { useSearchParams } from "react-router-dom"

export function Searchparams (){
    //hooks
    const [query] = useSearchParams();
    return(
        <h1>{query.get('id')}</h1>
    )
}