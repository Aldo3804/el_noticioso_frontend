
import {Tarjeta} from '../extras/Tarjeta'
import { AsidePage } from './AsidePage'
import {ListaNoticias} from '../ListaNoticias'
import { useParams } from 'react-router-dom';
import { Efemerides } from '../extras/Efemerides';
import { useUsuario } from '../../hooks/useUsuario';

export function CuerpoPage(){

    const { categoria } = useParams();
    const localia = categoria && categoria !== "favoritos" ? categoria : null;
    const favoritos = categoria === "favoritos";
   
    return(
        <main className="max-w-[1200px] mx-auto px-4 bg-white">

            <section className='flex flex-col sm:flex-row gap-10'>
                <Tarjeta titulo="Nuestro Propósito" contenido="El propósito de una página de noticias independientes es proporcionar información veraz, sin influencias ni presiones de gobiernos, grandes empresas o intereses particulares, para que la ciudadanía pueda formarse una opinión libre y fundamentada sobre temas relevantes. Este tipo de periodismo busca ofrecer una visión más completa y diversa de la realidad, dando voz a grupos vulnerables, minorías y discursos alternativos que no suelen tener espacio en medios tradicionales. Además, cumple una función esencial en la democracia al garantizar el acceso a información que permita a las personas tomar decisiones informadas y participar activamente en la vida pública"/>
                <Efemerides></Efemerides>
            </section>
            
            
            <article className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 items-start">
                <ListaNoticias localia={localia} favoritos={favoritos}/>
                <AsidePage className="sticky top-10 self-start" />

            </article>
            
        </main>
    )
    



}