import { motion } from "framer-motion";
import styled from "styled-components";

export const OrderContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
`;
export const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  font-size: 36px;
  border-radius: 5px;
  padding-left: 5px;
  min-width: 320px;
  outline: none;
  border: none;
  padding-left: 5px;
  box-shadow: 1px 2px 1px 1.5px rgba(136, 136, 136, 0.55);
  margin: 0 0 10px 0;
`;
export const Crew = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  box-shadow: 1px 2px 1px 1.5px rgba(136, 136, 136, 0.55);
  border-radius: 5px;
  padding: 20px;
  max-width: 450px;
`;
export const Button = styled(motion.button).attrs(() => ({
  initial: "visible",
  variants,
}))`
  border: none;
  border-radius: 5px;
  margin: 10px 0 10px 0;
  max-width: 300px;
  font-size: 2rem;
  cursor: pointer;
  font-weight: bold;
  background: none;
  color: #333;
  padding: 10px;
  box-shadow: 1px 2px 1px 1.5px rgba(136, 136, 136, 0.55);
  transition: background-color .22s ease-in;
  &:hover {
    background-color: #999;
    transform: scale(1.05);
  }
  &:active {
    box-shadow: unset;
  }
`;

export const variants = {
  visible: { opacity: 1 },
  visbleRed: { color: "#dd3a3a" },
};

export const GosNumber = styled.div`
  padding: 5px;
  box-shadow: 1px 2px 1px 1.5px rgba(136, 136, 136, 0.55);
`;
export const Img = styled.img`
  display: grid;
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: auto;
  grid-column-end: auto;
  justify-content: center;
`;
export const ErrorMes = styled.span`
  color: #dd3a3a;
`;
