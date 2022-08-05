export default {
  run(galleryName) {
    let pai = document.querySelectorAll('.' + galleryName);
    if (pai.length) {
      let row = 3;
      let padding = 18;
      let rowData = [], itemRow = [];
      let ctn = pai[0].firstChild;

      [].forEach.call(ctn.children, ((el,k) => {
        if (k%row === 0) itemRow = [];
        itemRow.push(el);
        if (k%row === 0) rowData.push(itemRow);
      }));

      rowData.forEach(row => {
        let item1 = row[0];
        let item2 = row[1];
        let item3 = row[2];

        let item1_h = parseInt(item1.dataset.height);
        let item2_h = parseInt(item2.dataset.height);
        let item3_h = parseInt(item3.dataset.height);

        let item1_w = parseInt(item1.dataset.width);
        let item2_w = parseInt(item2.dataset.width);
        let item3_w = parseInt(item3.dataset.width);

        // console.log("Item 1 H: ", item1_h, " W: ", item1_w);
        // console.log("Item 2 H: ", item2_h, " W: ", item2_w);
        // console.log("Item 3 H: ", item3_h, " W: ", item3_w);

        let diff = parseInt(Math.abs(item1_h - item2_h) / 2);

        if (item1_h > item2_h) {
          item1_h -= diff; item1_w -= diff;
          item2_h += diff; item2_w += diff;
        } else {
          item1_h += diff; item1_w += diff;
          item2_h -= diff; item2_w -= diff;
        }

        // console.log("DIFF: ", diff, "\n");
        // console.log("Item 1 H: ", item1_h, " W: ", item1_w);
        // console.log("Item 2 H: ", item2_h, " W: ", item2_w);
        // console.log("Item 3 H: ", item3_h, " W: ", item3_w);

        diff = parseInt(Math.abs(item2_h - item3_h) / 2);

        if (item2_h > item3_h) {
          item1_h -= diff; item1_w -= diff;
          item2_h -= diff; item2_w -= diff;
          item3_h += diff; item3_w += diff;
        } else {
          item1_h += diff; item1_w += diff;
          item2_h += diff; item2_w += diff;
          item3_h -= diff; item3_w -= diff;
        }

        // console.log("DIFF: ", diff, "\n");
        // console.log("Item 1 H: ", item1_h, " W: ", item1_w);
        // console.log("Item 2 H: ", item2_h, " W: ", item2_w);
        // console.log("Item 3 H: ", item3_h, " W: ", item3_w);


        item1.dataset.height = item1_h;
        item2.dataset.height = item2_h;
        item3.dataset.height = item3_h;

        item1.dataset.width = item1_w;
        item2.dataset.width = item2_w;
        item3.dataset.width = item3_w;
        

        let tam = row.reduce((x,el) => parseInt(el.dataset.width || 0) + x, 0);
        row.forEach(el => {
          let width = parseInt(el.dataset.width);
          let per = el.dataset.per ? parseInt(el.dataset.per) : ((width || 0) / tam) * 100;
          el.style.width = `calc(${per}% - ${padding}px)`;
        });
      });

      [].forEach.call(pai, el => el.style.display = 'block');
    }
  }
};