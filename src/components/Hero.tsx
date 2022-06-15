import { Box, Container } from "@mui/material";
import React, { FC, Fragment } from "react";
import { useAppSelector } from "../app/hooks";
import {
  selectHeroCurrent,
  selectHeroDescription,
  selectHeroTitle,
} from "../features/hero/heroSlice";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import ParticleBG from './ParticleBG';


const Hero: FC = () => {
  const current = useAppSelector(selectHeroCurrent);
  const title = useAppSelector(selectHeroTitle);
  

  return (
    <>
        <ParticleBG />
      <Container>
        <Box>
          <h1>{title}</h1>
          {current == "about" ? <About /> : null}
          {current == "portfolio" ? <Portfolio /> : null}
          {current == "contact" ? <Contact /> : null}
        </Box>
      </Container>
    </>
  );
};

export default Hero;
