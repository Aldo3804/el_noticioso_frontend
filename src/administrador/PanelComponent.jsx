
import { NoticiasComponent } from "./NoticiasComponent"
import { UsuariosComponent } from "./UsuariosComponent"

export function PanelComponent(){

    return(
        <section className="max-w-[1200px] mx-auto px-4 bg-white">
            <UsuariosComponent/>
            <br></br>
            <NoticiasComponent/>
        </section>
    )

}