import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { Box, CircularProgress } from "@mui/material";

export const GradientBackgroundCon  = styled.div`

 background: linear-gradient(to right, #000046, #1CB5E0);
 background-size: 400% 400%;
 animation: gradient 6s ease infinite;
 height: 100vh;
 width: 100vw;

 @keyframes gradient {

    0%{
        background-position: 0% 50%;
    }

    50%{
        background-position: 100% 50%;
    }

    100%{
        background-position: 0% 50%;
    }
    
 }
  
`;

export const BackgroudImage1 = styled(Image)`

 position: relative;
 z-index: 1;
  
`;

export const BackgroudImage2 = styled(Image)`

 position: relative;
 z-index: 1;
 width: 300px;
 height: 250px;
`;


export const FooterContainer = styled.div`

 width: 100vw;
 height: 55px;
 background-color: #000;
 color: #fff;
 text-align: center;
 position: absolute;
 bottom: 10px;
 font-size: 18px;
 font-family: 'Source Code Pro', monospace;
 /* display: flex; */
 justify-content: center;
 align-items: center;
`;

export const FooterLink = styled(Link)`
   color: #fff;
   font-weight: 600;
   text-decoration: none;
`;


export const QuoteGeneratorContainer = styled.div`

min-height: 250px;
min-width: 250px;
height: 60vh;
width: 60vw;
top: 50%;
left: 50%;
border: 2px solid #ffffff22;
border-radius: 15px;
transform: translate(-50%,-50%);
z-index: 2;
position: absolute;

background: rgba( 0, 0, 70, 0.3 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 20px );
-webkit-backdrop-filter: blur( 20px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
  
`;

export const QuoteGeneratorInnerContainer = styled.div`
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    position: absolute;
`;

export const QuoteGeneratorTitle = styled.div`
  font-size: 50px;
  font-family: 'Permanent Marker', cursive;
  text-align: center;
  color: #fff;
  padding: 0px 20px 0px 20px;
  position: relative;
  @media only screen and (max-width: 600px){
    font-size: 30px;
  }
`;

export const QuoteGeneratorSubTitle = styled.div`
  font-size: 35px;
  font-family: 'Caveat', cursive;
  text-align: center;
  color: #fff;
  padding: 0px 20px 0px 20px;
  position: relative;
  @media only screen and (max-width: 600px){
    font-size: 25px;
    position: relative;
  }
  
`;

export const QuoteGeneratorButton = styled.div`

height: 88px;
width: 300px;
border: 2px solid darkgray;
border-radius: 20px;

margin-top: 20px;
position: relative;
transition: 0ms.2s all ease-in-out;
cursor: pointer;
top: 20px;
margin: auto;
transform-origin: center;

background: rgba( 0, 0, 70, 0.3 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 20px );
-webkit-backdrop-filter: blur( 20px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );

  
&:hover {
    filter: brightness(3);
    transition: 0ms.2s all ease-in-out;
    transform: scale(1.1);
    transform-origin:center;
}
`;


export const QuoteGeneratorButtonText = styled.div`
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    position: absolute;
    font-family: 'Caveat', cursive;
    font-size: 35px;
    text-align: center;
    color: #fff;

`;

export const QuoteGeneratorModalContainer = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70vw;
  height: 70vh;
  box-shadow: 24;

  background: rgba( 193, 193, 255, 0.19 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 20px );
  -webkit-backdrop-filter: blur( 20px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );

  &:focus{
    outline: none !important;
  }


`;

export const QuoteGeneratorModalInnerContainer = styled.div`
  
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: relative;

`;

export const ModalCircularProgress = styled(CircularProgress)`

  color:  white !important;
  stroke-linecap: round;
  position: relative;
  margin-left: -55px;
  left: 50%;
  transform: translate(-50%);
  
`;

