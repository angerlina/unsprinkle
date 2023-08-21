import React from 'react';
import styled from 'styled-components/macro';
import {getSrcSets} from "../../utils";

const Hero = () => {
  return (
    <Wrapper>
      <HeroPicture src="/images/hero-img.jpg" alt="Photo of the current hero" />
      <Swoop src="/swoop.svg" alt=""/>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: hsl(0deg 0% 1%);
`;

const HeroPicture = ({src}) => {
    const srcSets = getSrcSets(src);
    return <picture>
        {srcSets.map((srcSet, index) => (<source srcSet={srcSet} key={index}/>))}
        <HeroImage src={src}/></picture>;
}


const HeroImage = styled.img`
  display: block;
  width: min(500px, 100vw);
`;

const Swoop = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  /*
    Overhang by a couple px to prevent any pixel-rounding
    display issues
  */
  bottom: -2px;
  width: 100%;
  object-fit: cover;
`;

export default Hero;
