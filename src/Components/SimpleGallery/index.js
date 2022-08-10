import { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

function SimpleGallery({ galleryID, images }) {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + galleryID,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <div className="pswp-gallery" id={galleryID}>
      {images.map((image, index) => (
        <a
          href={image.largeURL}
          data-pswp-width={image.width}
          data-pswp-height={image.height}

          data-width={image.width}      // NOTE: utilizado na plug-grid-image.js (Não é necessário no funcionamento do Photoswipe) 
          data-height={image.height}    // NOTE: utilizado na plug-grid-image.js (Não é necessário no funcionamento do Photoswipe) 
          data-per={image.per}          // NOTE: utilizado na plug-grid-image.js (Não é necessário no funcionamento do Photoswipe) 
          data-row={image.row}          // NOTE: utilizado na plug-grid-image.js (Não é necessário no funcionamento do Photoswipe) 
          
          key={galleryID + '-' + index}
          target="_blank"
          rel="noreferrer"
        >
          <img src={image.thumbnailURL} alt="" />
        </a>
      ))}
    </div>
  );
}

export default SimpleGallery;