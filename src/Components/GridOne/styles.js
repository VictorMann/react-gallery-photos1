import styled, { css } from 'styled-components';

export const Container = styled.div`
#${props => props.childrenID} {
  display: flex;
  flex-direction: column;
  
  a {
    display: flex;
    justify-content: center;
    align-item: center;
    text-decoration: none;
    margin-bottom: 3rem;

    &:last-child {
      margin: 0;
    }
  }

  img {
    max-width: 100%;
  }
}
`;