import React, { useRef } from 'react'
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import styled from 'styled-components';
import arrow from './image/icon-arrow.svg';



const Question = styled.div`
	font-weight: ${props => props.active ? "700" : "400"};
  font-family: ${props => props.active ? "KumbhSans-Bold" : "KumbhSans-Light"}



`;

const Answer = styled.div`
	color: #787887;
	margin-top: 12px;
  display: ${props => props.active  ? "block" : "none"};
  line-height: 1.5;
`;

const QuestionConteiner = styled.div`
	cursor: pointer;
	color: ${props => (props.active) ? "#1d1e35" :  "#4a4b5e"};
	padding: 12px 0;
  border-bottom: 1px solid #E7E7E8;


	&:hover{
		color: ${props => props.active ? "black" : "#f47c57"};
		pointer: cursor;
  } 


  @media (min-width: 900px){
      width: 74%;

	}
`;

const QuestionTitle = styled.div`
	display: flex;
  justify-content: space-between;
  align-items: center;

  & > img {
  
    transform: ${props => props.active ? "rotate(180deg)" : "none"};
  }
`;

const Title = styled.h1`
	text-align: center;
	font-family: "KumbhSans-Bold";
  margin-bottom: 20px;

  @media (min-width: 900px){
    text-align: left
  } 
`;

const FaqConteiner = styled.div`
	margin-bottom: 20px;

    @media (min-width: 900px){
      width: 50%;
  } 
`;


const Faq = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  const dropdownRef1 = useRef(null);
  const [isActive1, setIsActive1] = useDetectOutsideClick(dropdownRef1, false);
  const onClick1 = () => setIsActive1(!isActive1);

 const dropdownRef2 = useRef(null);
  const [isActive2, setIsActive2] = useDetectOutsideClick(dropdownRef2, false);
  const onClick2 = () => setIsActive2(!isActive2);

  const dropdownRef3 = useRef(null);
  const [isActive3, setIsActive3] = useDetectOutsideClick(dropdownRef3, false);
  const onClick3 = () => setIsActive3(!isActive3);

  const dropdownRef4 = useRef(null);
  const [isActive4, setIsActive4] = useDetectOutsideClick(dropdownRef4, false);
  const onClick4 = () => setIsActive4(!isActive4);

	return (
		<FaqConteiner>
      
      <Title>FAQ</Title>

      <QuestionConteiner active={isActive} onClick={onClick} >
      	<QuestionTitle active={isActive}>
      		<Question active={isActive}> How many team members can I invite? </Question>
      		<img src={arrow} alt="arrow"/>
      	</QuestionTitle>

      	<Answer ref={dropdownRef} active={isActive}>
      		You can invite up to 2 additional users on the Free plan. There is no limit on 
 					team members for the Premium plan.
      	</Answer>
     </QuestionConteiner>


      <QuestionConteiner active={isActive1} onClick={onClick1} >
        <QuestionTitle active={isActive1}>
          <Question active={isActive1}>What is the maximum file upload size?</Question>
          <img src={arrow} alt="arrow"/>
        </QuestionTitle>

        <Answer ref={dropdownRef1} active={isActive1}>
          No more than 2GB. All files in your account must fit your allotted storage space.
        </Answer>
     </QuestionConteiner>

     <QuestionConteiner active={isActive2} onClick={onClick2} >
        <QuestionTitle active={isActive2}>
          <Question active={isActive2}>How do I reset my password?</Question>
          <img src={arrow} alt="arrow"/>
        </QuestionTitle>

        <Answer ref={dropdownRef2} active={isActive2}>
          Click “Forgot password” from the login page or “Change password” from your profile page.
          A reset link will be emailed to you.
        </Answer>
     </QuestionConteiner>

     <QuestionConteiner active={isActive3} onClick={onClick3} >
        <QuestionTitle active={isActive3}>
          <Question active={isActive3}>Can I cancel my subscription?</Question>
          <img src={arrow} alt="arrow"/>
        </QuestionTitle>

        <Answer ref={dropdownRef3} active={isActive3}>
          Yes! Send us a message and we’ll process your request no questions asked.
        </Answer>
     </QuestionConteiner>

      <QuestionConteiner active={isActive4} onClick={onClick4} >
        <QuestionTitle active={isActive4}>
          <Question active={isActive4}>Do you provide additional support?</Question>
          <img src={arrow} alt="arrow"/>
        </QuestionTitle>

        <Answer ref={dropdownRef4} active={isActive4}>
          Chat and email support is available 24/7. Phone lines are open during normal business hours.
        </Answer>
     </QuestionConteiner>


 		</FaqConteiner>
	);
}

export default Faq
