import React from "react";
import "./Benefit.css";
import ItemBenefit from "./ItemBenefit";
const Benefit = () => {
  return (
    <div className="sectionBenefit">
      <h1 className="title">Beneficios</h1>
      <div className="containerBenefits">
        <ItemBenefit
          titleBenefit={"Últimas novedades"}
          description={
            "El evento brinda a los participantes acceso directo a conocimientos actualizados sobre tecnología, desarrollo personal y habilidades blandas. Esto asegura que los asistentes se mantenga al día con las últimas tendencias y mejores prácticas en estos campos en constante evolución."
          }
        ></ItemBenefit>
        <ItemBenefit
          titleBenefit={"Incrementa tus Habilidades"}
          description={
            "El evento se enfoca en el desarrollo de habilidades relevantes para el mundo actual. Los asistentes tienen la oportunidad de mejorar sus habilidades técnicas y adquirir competencias esenciales para el éxito en el ámbito académico y profesional."
          }
        ></ItemBenefit>
        <ItemBenefit
          titleBenefit={"Networking"}
          description={
            "El DevFest  fomenta la creación de redes y la colaboración entre los asistentes y los oradores, lo que reúne las condiciones para el intercambio de ideas, la colaboración en proyectos y el establecimiento de relaciones profesionales duraderas en nuestra comunidad local."
          }
        ></ItemBenefit>
        <ItemBenefit
          titleBenefit={"Trabajo Colaborativo"}
          description={
            "El evento impulsa la innovación al reunir y exponer a los participantes a nuevas ideas, tecnologías y perspectivas, por lo que se crea un ambiente propicio para la generación de soluciones creativas a los desafíos locales."
          }
        ></ItemBenefit>
      </div>
    </div>
  );
};

export default Benefit;
