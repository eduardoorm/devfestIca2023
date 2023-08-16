import React from "react";
import "./Sponsor.css";
import CardSponsor from "./CardSponsor";
import githubSponsor from "../../assets/sponsor/github.png";
import jetBrainsSponsor from "../../assets/sponsor/jetBrainsLogo.png";
import oreillySponsor from "../../assets/sponsor/oreillyLogo.png";
import googleDevelopers from "../../assets/sponsor/googleDevelopers.png";
const Sponsor = () => {
  return (
    <section id="partner">
      <div className="sectionSponsor">
        <h1 className="titleSectionSponsor">Patrocinado Por</h1>
        <div className="containerSponsors">
          <CardSponsor imageUrl={googleDevelopers}  href={'https://developers.google.com/'} />
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
