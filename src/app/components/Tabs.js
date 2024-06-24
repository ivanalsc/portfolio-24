"use client";

import { useState } from "react";
import styles from "./tabs.module.css";
import Link from "next/link";
import Image from "next/image";



export default function Tabs({font}) {
  const [tabs, updateTabs] = useState("about");

  const handleTab = (tab) => {
    updateTabs(tab);
  };

  return (
    <div>
      <div className={styles.tabList}>
        <button
          onClick={() => handleTab("about")}
          className={tabs === "about" ? styles.buttonActive : styles.button}
        >
          Sobre mí
        </button>
        <button
          onClick={() => handleTab("projects")}
          className={tabs === "projects" ? styles.buttonActive : styles.button}
        >
          Proyectos
        </button>
      </div>
      <div>
        {tabs === "about" ? <About tabs={tabs} /> : <Projects tabs={tabs} font={font}/>}
      </div>
    </div>
  );
}

const About = ({ tabs }) => {
  return (
    <div className={tabs === "about" ? styles.contentActive : styles.content}>
      <h2>Sobre mí</h2>
      <p>
        Me divierte crear interfaces que permitan a las personas navegar una web
        usable y accesible. Mi foco siempre está puesto en aprender cosas que me
        sirvan más allá de la tecnología con la que se trabaje, que me permitan
        entender el comportamiento de las personas usuarias para poder mejorar
        su experiencia trabajando a la par de diseñadores y otros profesionales.{" "}
        <br />
        Trabajo hace 4 años desarrollando interfaces de sitios de e-commerce en
        una agencia que acompaña a empresas a formar parte del mundo digital y
        me encuentro aprendiendo sobre SEO para optimizar el posicionamiento de
        los sitios creados.
        <br />
        Actualmente buscando nuevos desafíos que me permitan aportar lo
        aprendido y seguir creciendo como profesional.
      </p>
    </div>
  );
};
const Projects = ({ tabs, font }) => {
  return (
    <div
      className={tabs === "projects" ? styles.contentActive : styles.content}
    >
      <h2>Proyectos</h2>
      <p>
        Algunos challenges/proyectos personales en los que trabajé en mis
        tiempos libres
      </p>
      <div className={styles.projectsContainer}>
      <div className={styles.projectCard}>
        <Link href="/proyectos/meli-challenge">
      <Image 
              src="/meli-thumbnail.png"
              width={300}
              height={150}
              alt="Challenge MeLi"
            />
        
        <h3>Callenge MeLi</h3>
        <div className={font.className}>

        <div className={styles.projectStack}>
            <span className={styles.tag}>Next.js</span>
            <span className={styles.tag}>CSS</span>


        </div>
        </div>
       
       <div className={font.className}>
        <p className={styles.seeMore} >Ver más <svg height="12" viewBox="0 0 21 21" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="currentColor" stroklinecap="round" strokeLinejoin="round" transform="translate(4 6)"><path d="m9.5.497 4 4.002-4 4.001"/><path d="m.5 4.5h13"/></g></svg></p>
        </div></Link>
        </div>

        <div className={styles.projectCard}>
        <Link href="/proyectos/multistep-form">
      <Image 
              src="/form.png"
              width={300}
              height={150}
              alt="From multistep"
            />
        
        <h3>Multistep form</h3>
        <div className={font.className}>

        <div className={styles.projectStack}>
            <span className={styles.tag}>React.js</span>
            <span className={styles.tag}>Vite</span>
            <span className={styles.tag}>CSS</span>


        </div>
        </div>
       
       <div className={font.className}>
        <p className={styles.seeMore} >Ver más <svg height="12" viewBox="0 0 21 21" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="currentColor" stroklinecap="round" strokeLinejoin="round" transform="translate(4 6)"><path d="m9.5.497 4 4.002-4 4.001"/><path d="m.5 4.5h13"/></g></svg></p>
        </div></Link>
        </div>


      </div>
      
    </div>
  );
};
