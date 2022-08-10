import { useEffect } from 'react';
import * as C from './styles';

import gridImage from '../../Helpers/plug-grid-image';

export default ({ children, childrenID }) => {

  useEffect(() => {
    gridImage.run('grid-image-variavel');
  }, []);

  return (
    <C.Container childrenID={childrenID}>
      {children}
    </C.Container>
  )
}