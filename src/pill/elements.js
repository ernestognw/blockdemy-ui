import styled from "styled-components";
import getStyle from "./utils";
import { space } from "styled-system";

const PillContainer = styled.div`
  width: fit-content;
  padding: ${({ size }) => (size === "small" ? "3.5px 5.5px" : "8px 10px")};
  border-radius: ${({ theme }) => theme.radius};
  display: flex;
  align-items: center;
  font-size: ${({ size }) => (size === "small" ? "0.7rem" : "0.85rem")};
  margin: 0;

  ${getStyle};
  ${space};
`;

export default PillContainer;
