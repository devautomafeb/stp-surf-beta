
import styled from "styled-components";

export const Layout01 = styled.div`
  height: auto;
  width: auto;
  background-size: cover;
  background-position: center;
  text-align: center;
  margin: -20px;
  background-color: ${(props) => props.theme['--violet']};
  box-sizing: border-box;
`;

export const Layout02 = styled.div`
  margin: 0;
  height: auto;
  width: 98vw;
  background-image: linear-gradient(-25deg, white, ${(props) => props.theme['--gray-200']}, white);
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

