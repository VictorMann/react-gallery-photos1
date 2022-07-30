import styled from "styled-components";

// ESTRUTURE
export const Container = styled.div`
display: flex;
height: 100%;
`;

export const LeftSide = styled.div`
margin-right: 2%;
padding-left: 4%;
width: 18%;

&, a {
  color: #222;
}
a {
  text-decoration: none;
}
.logo {
  font-size: 28px;
  line-height: 1;
  margin: 2em 0;
}
.social-media {
  display: flex;
  align-items: center;
  margin-top: 2em;

  svg {
    width: 18px;
    fill: rgb(150, 150, 150);
    margin: 0;
    padding: 0;

    transition: all .2s;
    
    &.I1 {
      width: 30px;
      margin-right: 1.7em;
    }

    &:hover {
      fill: #333;
    }
  }

}
`;

export const RightSide = styled.main`
flex: 1;
// border: 1px dashed red;
margin-top: 1.6em;
margin-right: 5px;
`;