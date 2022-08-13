import { useEffect } from 'react';
import * as C from './styles';

import gridImage from '../../Helpers/plug-grid-image';
let flag = 0;
export default ({ children, childrenID }) => {

  useEffect(() => {
    flag = setInterval(() => {
      let grid = document.querySelector('.pswp-gallery');
      if (grid && grid.children.length) {
        clearInterval(flag);
        gridImage.run('grid-image-variavel');
      }
    }, 100);
  }, []);

  return (
    <C.Container childrenID={childrenID}>
      {children}
    </C.Container>
  )
}