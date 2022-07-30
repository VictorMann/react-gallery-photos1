import { useEffect, useState } from 'react';
import * as C from './styles';

import ImageList from '../../Components/ImageList';


import api from '../../api';

export default () => {
  const [imageList, setImageList] = useState([]);

  useEffect(()=> {
    const getRecents = async () => {
      let resp = await api.getRecents();
      setImageList(resp);
    };
    getRecents();
  }, []);



  return (
    <C.Container>
      {imageList.length > 0 &&
        <ImageList>
          {imageList.map((item,k) => (
            <img className="imagem" key={k} data-id={item.id} src={item.image} data-width={item.width} data-height={item.height} alt="" loading="lazy" />
          ))}
        </ImageList>
      }
    </C.Container>
  )
}