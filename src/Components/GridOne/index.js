import * as C from './styles';

export default ({ children, childrenID }) => {
  return (
    <C.Container childrenID={childrenID}>
      {children}
    </C.Container>
  )
}