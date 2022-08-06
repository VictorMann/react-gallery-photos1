import styled from "styled-components";

export const Container = styled.div`
display: grid;
grid-template-columns: repeat(${props => props.qtyPerRow}, 1fr);
gap: ${props => props.gap}px;

a { 
  position: relative;
  display: flex;
  text-decoration: none;
  
  img { width: 100% }
  
  span {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: transparent;
    font-size: 18px;
    text-transform: uppercase;
    background-color: transparent;
    transition: background-color .2s ease, color .2s ease;

    &:hover {
      background-color: rgba(255, 255, 255, .5);
      color: #222;
    }
  }
}


`;