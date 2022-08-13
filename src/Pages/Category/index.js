import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as C from './styles';
import BackToTop from "react-back-to-top-button";

import api from '../../api';
import GridBasic from '../../Components/GridBasic';

export default () => {
  const [images, setImages] = useState([]);
  const { cat } = useParams();

  useEffect(() => {
    const fn = async () => {
      setImages([]);
      let resp = await api.getCategories(cat, 1); // 1 = rota: sub-categories
      setImages(resp);
    };
    fn();
  }, [cat]);

  return (
    <C.Container>
      {images.length > 0 &&
        <GridBasic images={images} />
      }
      {images.length > 0 &&
        <div className="area-button-back">
          <BackToTop
            // showOnScrollUp
            showAt={1}
            // speed={1500}
            // easing="easeInOutQuint"
            style={{position: 'static'}}
          >
            <span className="arrow">↑</span>
            <span>Back to Top</span>
          </BackToTop>
        </div>
      }
    </C.Container>
  )
}