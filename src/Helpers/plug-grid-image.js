export default {
  run() {
    let ctn = document.querySelectorAll('.grid-image');
    if (ctn.length) {
      let row = 3;
      let padding = 18;
      let rowData = [], itemRow = [];
      ctn = ctn[0];
      const tamCtn = ctn.clientWidth;
      [].forEach.call(ctn.children, ((el,k) => {
        if (k%row === 0) itemRow = [];
        itemRow.push(el);
        if (k%row === 0) rowData.push(itemRow);
      }));

      rowData.forEach(row => {
        let maxHeight = row.reduce((x,el) => x > parseInt(el.dataset.height) ? x : parseInt(el.dataset.height), 0);
        row.forEach(el => {
          let width = parseInt(el.dataset.width || 0);
          let per = maxHeight / parseInt(el.dataset.height);
          if (per > 1.1) per = 1.1;
          if (parseInt(el.dataset.height) < maxHeight) width = width * per;
          el.dataset.width = width;
        });

        let tam = row.reduce((x,el) => parseInt(el.dataset.width || 0) + x, 0);
        row.forEach(el => {
          let width = parseInt(el.dataset.width);
          let per = ((width || 0) / tam) * 100;
          el.style.width = `calc(${per.toFixed(2)}% - ${padding}px)`;
        });
      });
    }
  }
};