import { useEffect } from 'react';
import * as C from './styles';

import gridImage from '../../Helpers/plug-grid-image';

let flag = 0;

export default ({ children }) => {

  useEffect(() => {
    clearTimeout(flag);
    flag = setTimeout(() => gridImage.run(), 100);
  }, []);

  return (
    <C.Container>
      {children}
    </C.Container>
  )
}