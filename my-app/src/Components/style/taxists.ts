import { motion } from "framer-motion";
import styled from "styled-components";


export const TaxistsContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 5px;
  padding: 20px;
  font-size: 24px;
  z-index: 500;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #fff; 
  box-shadow: 1px 2px 1px 1.5px rgba(136, 136, 136, 0.55);
`;
