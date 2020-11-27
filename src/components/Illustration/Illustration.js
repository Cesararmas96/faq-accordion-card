import React, { Fragment } from 'react'
import  IllustrationMobile from './image/illustration-woman-online-mobile.svg'
import  bgPatternMobile from './image/bg-pattern-mobile.svg'

import  IllustrationDesktop from './image/illustration-woman-online-desktop.svg'
import  Box from './image/illustration-box-desktop.svg'
import  BgDesktop from './image/bg-pattern-desktop.svg'

import styled from 'styled-components';


const IllustrationStyleMobile = styled.img`
	position: relative;
    top: -128px;
    left: -16px;

    @media (min-width: 900px){
    	display: none;
 	} 

`;

const BgPatternStyleMobile = styled.img`
	top: -210px;
    position: relative;
    left: 10px;

     @media (min-width: 900px){
    	display: none;
 	} 

`;


const ConteinerIllustrationPhone = styled.div`
    height: 130px;

     @media (min-width: 900px){
     	display: none;

     } 
`;


const FagLogoHolder = styled.div`
	  @media (min-width: 900px){
     	 display: flex;
        align-items: center;
        height: 100%;
        justify-content: center;

     } 
`;

const FagLogo = styled.div`
	@media (min-width: 900px){
  		display: flex;
        align-items: center;
        background-image: url(${IllustrationDesktop}), url(${BgDesktop});
        background-position: -77px center, -544px -277px;

        background-repeat: no-repeat;
        background-size: 80%, 175%;
        height: 100%;
        min-width: 300px;
        margin: 0;
        padding: 0;
        width: 525px;
        max-width: 500px;
        position: relative;
    }
`

const LogoDesktop = styled.img`
  display: none;
	@media (min-width: 900px){
		display: block; 
        position: absolute;
        margin-top: 68px;
        left: -75px;   
        width 29%; 
    
	}
`


const Illustration = () => {
	return(
	<Fragment>
		<ConteinerIllustrationPhone>

			<IllustrationStyleMobile src={IllustrationMobile} alt="Illustration" />
			<BgPatternStyleMobile src={bgPatternMobile} alt="Background Illustration" />
		</ConteinerIllustrationPhone>

		<FagLogoHolder>
		  <FagLogo>
		    <LogoDesktop src={Box} alt="logo"/>
		  </FagLogo>
		</FagLogoHolder>
 	</Fragment>

	)
}

export default Illustration;