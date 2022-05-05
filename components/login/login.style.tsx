import { Container, Card } from "@mui/material";
import styled from "styled-components";

export const CenteredContainer = styled(Container)`
  display: flex!important;
  width: 100%;
  height: 90vh;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

export const CenteredBox = styled(Card)`
  height: 10rem;
  width: 20rem;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: stretch;
`;
