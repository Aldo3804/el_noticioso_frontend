
import { useParams } from "react-router-dom";
import { ListaNoticias } from "../ListaNoticias";


export function NoticiasPage(){

    const {categoria} = useParams();
 
    const localia = categoria || null
    

    return(
        <ListaNoticias localia={localia}/>
    )

}

