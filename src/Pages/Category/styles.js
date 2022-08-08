import styled from "styled-components";

export const Container = styled.div`

.area-button-back {
  display: flex;
  justify-content: center;
  
  button.back-to-top {
    color: #999;
    font-size: 18px;
    margin: 60px 0;

    .arrow {
      display: inline-block;
      margin-right: 10px;
    }
  }
}

`;

export const ImageList = styled.div.attrs({className: 'grid-image'})`
display: flex;
flex-wrap: wrap;

.imagem {
  border: 9px solid transparent;
  height: 100%;
}
`;