import styled from "styled-components";

export const Container = styled.nav`
.menu {
  font-size: 14px;
  list-style: none;
  padding: 0;
  margin: 0;

  a {
    display: inline-block;
    margin: .7em 0;

    &:hover {
      text-decoration: underline;
    }
    &.active {
      color: #999;
      text-decoration: underline;
    }
  }
}
`;