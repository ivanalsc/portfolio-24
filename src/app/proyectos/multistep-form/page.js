import Link from "next/link";
import styles from "../proyectos.module.css";
import Image from "next/image";

export default function MultistepForm() {
return(
    <div className={styles.projectContainer}>
        <h1>Multistep Form</h1>
        <div className={styles.container}>
        <div>
            <Image 
              src="/form-twisted.png"
              width={400}
              height={300}
              alt="Multistep form"
              />
        </div>
        <p>
            El challenge pertenece a <Link target="_blank" href="https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ">Frontend Mentor</Link> y consiste en realizar un formulario con distintos pasos siguiendo un diseño brindado.
        </p>
       
        </div>
        <div className={styles.container}>
          <p>Si bien en una primera instancia puede lucir como una tarea fácil, se empieza a complejizar a medida que resulta necesario pasar el estado de los distintos pasos entre las instancias, así como modificar las opciones acorde a lo que se seleccione.<br/>
          Para el manejo de estado decidí sólo usar context de la mano del hook useState. Esta decisión se debe a que al ser un challenge mi idea fue resolverlo lo más rápido posible, pero sé que existen muchas maneras de optimizar el código y mejorar/simplificar el traspaso de información entre instancias y lo abordaré a futuro como mejora.
          </p>
        </div> 
     
        <div className={styles.linksContainer}>
            <Link className={styles.seeDemo} href="https://multistep-form-rust.vercel.app/">Ver demo</Link>
            <Link className={styles.seeRepo} href="https://github.com/ivanalsc/multistep-form">Ver repo <svg height="12" viewBox="0 0 21 21" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="currentColor" stroklinecap="round" strokeLinejoin="round" transform="translate(4 6)"><path d="m9.5.497 4 4.002-4 4.001"/><path d="m.5 4.5h13"/></g></svg></Link>

</div>
        
    </div>
)

}