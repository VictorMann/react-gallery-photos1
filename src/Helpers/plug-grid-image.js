export default {
  run(galleryName) {
    let pai = document.querySelectorAll('.' + galleryName);
    if (pai.length) {
      let defaultRowNotGroup = 3;
      let padding = 18;
      let rowData = [], rowNotGroup = [], itemRow = [], idx = 1000;
      let ctn = pai[0].firstChild;


      // Separação de Itens por Linha
      [].forEach.call(ctn.children, ((el,k) => {
        // if (k%row === 0) itemRow = [];
        // itemRow.push(el);
        // if (k%row === 0) rowData.push(itemRow);

        let group = el.dataset.row;
        
        if (group == null) {
          if (itemRow.length == defaultRowNotGroup) itemRow = [];
          if (itemRow.length == 0) rowNotGroup.push(itemRow);
          itemRow.push(el);
        }
        else {
          group = parseInt(group);
          if (rowData[group]) rowData[group].push(el);
          else rowData[group] = [el];
        }
      }));

      rowNotGroup.forEach(row => rowData[rowData.length] = row);

      rowData = rowData.filter(item => item);

      console.log(rowData);

      // Calculo dos itens para caber na linha
      rowData.forEach(row => {

        row.forEach((item, index, ar) => {
          let item1 = item;
          let item2 = ar[index + 1];
          if (!item2) return;
          
          let item1_h = parseInt(item1.dataset.height);
          let item2_h = parseInt(item2.dataset.height);

          let item1_w = parseInt(item1.dataset.width);
          let item2_w = parseInt(item2.dataset.width);

          let diff = parseInt(Math.abs(item1_h - item2_h) / 2);

          if (item1_h > item2_h) {
            do {
              let item1_h = parseInt(ar[index].dataset.height);
              let item1_w = parseInt(ar[index].dataset.width);
              item1_h -= diff; item1_w -= diff;
              ar[index].dataset.height = item1_h;
              ar[index].dataset.width = item1_w;
            } while ((--index) >= 0);
            item2_h += diff; item2_w += diff;
            item2.dataset.height = item2_h;
            item2.dataset.width = item2_w;
          } else {
            do {
              let item1_h = parseInt(ar[index].dataset.height);
              let item1_w = parseInt(ar[index].dataset.width);
              item1_h += diff; item1_w += diff;
              ar[index].dataset.height = item1_h;
              ar[index].dataset.width = item1_w;
            } while ((--index) >= 0);
            item2_h -= diff; item2_w -= diff;
            item2.dataset.height = item2_h;
            item2.dataset.width = item2_w;
          }
        });

        // Soma da Largura de todos os itens da linha
        let tam = row.reduce((x,el) => parseInt(el.dataset.width || 0) + x, 0);

        // Aplicando cálculo
        row.forEach(el => {
          let width = parseInt(el.dataset.width);
          let per = el.dataset.per ? el.dataset.per : ((width || 0) / tam) * 100;
          el.style.width = `calc(${per}% - ${padding}px)`;
        });
      });

      [].forEach.call(pai, el => el.style.display = 'block');
    }
  }
};