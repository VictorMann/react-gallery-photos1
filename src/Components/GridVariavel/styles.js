import styled, { css } from 'styled-components';

export const Container = styled.div.attrs({className: 'grid-image-variavel'})`
display: none;

#${props => props.childrenID} {
  display: flex;
  flex-wrap: wrap;
  // width: 5000px;
  
  a {
    display: flex;
    text-decoration: none;
    border: 9px solid transparent;
    // height: 100%;
  }

  img {
    width: 100%;
  }
}
`;