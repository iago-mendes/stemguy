// @ts-nocheck
import styled from "styled-components";

const Container = styled.div`
  background-color: ${props => props.theme.colors.primary};
  height: 100vh;
  width: ${props => props.clicked ? 400 : 50};
`

export default Container