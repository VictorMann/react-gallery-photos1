import { useEffect } from 'react';
import * as C from './styles';

import gridImage from '../../Helpers/plug-grid-image';

export default ({ children }) => {

  useEffect(() => gridImage.run(), []);

  return (
    <C.Container>
      {children}
    </C.Container>
  )
}