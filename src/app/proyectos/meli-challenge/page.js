import Link from "next/link";
import styles from "../proyectos.module.css";
import Image from "next/image";

export default function MeliChallenge() {
return(
    <div className={styles.projectContainer}>
        <h1>MeLi Challenge</h1>
        <div className={styles.container}>
        <p>El challenge que circulaba proponía recrear la barra de búsqueda de MeLi y consecuentemente la página de resultados de búsqueda obteniendo los datos desde una API.
           <br/> Yo decidí extenderlo y realizar, además de lo propuesto, la página de producto, replicando, modificando algunos detalles y proponiendo una nueva funcionalidad.

        </p>
        <div>
            <Image 
              src="/search.png"
              width={400}
              height={300}
              alt="Search results"
              />
        </div>
        </div>
        <div className={styles.container}>
            <p>La nueva funcionalidad consiste en la posibilidad de ver una versión resumida de la página de producto.<br />
            ¿Para qué serviría esto?<br/>
            Actualmente la página de producto cuenta con mucha información, que, si bien es necesaria, puede abrumar a la persona usuaria generando incomodidad y resultando en el abandono del sitio. <br/>Poder ver una versión resumida de la infomación del producto permitiría contar con los datos más importantes, ocultando datos secundarios o menos importantes, permitiendo limpiar un poco la interfaz, facilitando así su lectura, sobretodo pensando en personas con algún tipo de condición intelectual, como puede ser TDAH, así como en personas de edades avanzadas.<br/>
            En la siguiente demo se puede ver una aproximación a dicha funcionalidad. Se puede también realizar búsquedas en la barra para ver distintos productos.
            </p>
        </div> 
        <div className={styles.container}>
        <Image 
              src="/pdp-full.png"
              width={400}
              height={300}
              alt="Product page full version"
              />
              <Image 
              src="/pdp-summary.png"
              width={400}
              height={300}
              alt="Product page summary version"
              />
            </div>
        <div className={styles.linksContainer}>
            <Link className={styles.seeDemo} href="https://challenge-me-li.vercel.app/items/MLA1364062753">Ver demo</Link>
            <Link className={styles.seeRepo} href="https://github.com/ivanalsc/Challenge-MeLi-">Ver repo <svg height="12" viewBox="0 0 21 21" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="currentColor" stroklinecap="round" strokeLinejoin="round" transform="translate(4 6)"><path d="m9.5.497 4 4.002-4 4.001"/><path d="m.5 4.5h13"/></g></svg></Link>

</div>
        
    </div>
)

}