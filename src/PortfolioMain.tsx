import { Introduction } from "./customComponents/sections/Introduction";
import { NavBar } from "./customComponents/NavBar";
import { HighlightedWork } from "./customComponents/sections/HighlightedWork";
import { TechnicalSkills } from "./customComponents/sections/TechnicalSkills";
import { CareerPath } from "./customComponents/sections/CareerPath";
import { Contact } from "./customComponents/sections/Contact";
import { Archivements } from "./customComponents/sections/Archivements";
import { Footer } from "./customComponents/Footer";

export const PortfolioMain = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <NavBar />
      <main id="top">
        <Introduction />
        <Archivements />
        <HighlightedWork />
        <TechnicalSkills />
        <CareerPath />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};
