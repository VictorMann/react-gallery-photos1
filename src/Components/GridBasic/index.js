import { Link } from 'react-router-dom';
import * as C from './styles';

import { union } from '../../Helpers';

/**
 * props { images, qtyPerRow, gap }
 */
export default (props) => {
  let propsDefalut = {
    qtyPerRow: 3,
    gap: 18
  };

  props = union(propsDefalut, props);
  
  return (
    <C.Container {...props}>
      {props.images.map((item, index) => (
        <Link key={index} to={item.slug}>
          <img src={item.thumbnailURL} alt="" loading="lazy" />
          <span>{item.title}</span>
        </Link>
      ))}
    </C.Container>
  );
};