import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as C from './styles';
import BackToTop from "react-back-to-top-button";

import GridVariavel from '../../Components/GridVariavel';
import SimpleGallery from '../../Components/SimpleGallery';

import api from '../../api';


export default () => {
  const [images, setImages] = useState([]);
  const { subcat } = useParams();

  useEffect(() => {
    const fn = async () => {
      setImages([]);
      let resp = await api.getCategories(subcat);
      setImages(resp);
    };
    fn();
  }, [subcat]);

  return (
    <C.Container>
      {images.length > 0 &&
        <GridVariavel childrenID="pswp-gallery-cat">
          <SimpleGallery 
            galleryID="pswp-gallery-cat"
            images={images} 
          />
        </GridVariavel>
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