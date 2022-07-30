import styled from "styled-components";

export const Container = styled.div``;

export const ImageList = styled.div.attrs({className: 'grid-image'})`
display: flex;
flex-wrap: wrap;

.imagem {
  border: 9px solid transparent;
  height: 100%;
}
`;