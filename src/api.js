const BASE = '';

export default {
  async getRecents() {
    let data = [
      {id: 1, width: 1920, height: 1281, image: 'https://cdn.myportfolio.com/6ddb748e7455b951706cf3e4b96619a0/3d4536f6-9c36-423a-9735-cc184de5e942_rw_1920.jpg?h=a3bf349f933ca2cefed5019d1ad8877f'},
      {id: 2, width: 600, height: 900, image: 'https://cdn.myportfolio.com/6ddb748e7455b951706cf3e4b96619a0/4960139d-27cb-4b9e-a9c9-2a9c1a5acb21_rw_600.gif?h=1ad6105bc2ffa0c1f051358b44720f51'},
      {id: 3, width: 600, height: 900, image: 'https://cdn.myportfolio.com/6ddb748e7455b951706cf3e4b96619a0/3da5d46a-3d27-4cfd-adf5-31de3dcceb72_rw_600.gif?h=4ebc0a316aea2e51fe7111bb75828e22'},
      {id: 4, per: 24, width: 481, height: 720, image: 'https://cdn.myportfolio.com/6ddb748e7455b951706cf3e4b96619a0/d94a980b-16b3-4bfb-96e3-da41a143edb9_rw_600.gif?h=22a2f646cb5bce1651da745f3377fd26'},
      {id: 5, per: 20, width: 506, height: 900, image: 'https://cdn.myportfolio.com/6ddb748e7455b951706cf3e4b96619a0/5375bfda-5cb0-407e-a02d-2b3261343be8_rw_600.gif?h=ac26d4926c45df124912bdef87d800fc'},
      {id: 6, per: 56, width: 700, height: 394, image: 'https://cdn.myportfolio.com/6ddb748e7455b951706cf3e4b96619a0/63bf4d16-2e16-4296-886b-7cbbdc84b814_rw_1200.gif?h=b44d9b1dce4fd323866c2ed21a4f8e67'},
      {id: 7, width: 1920, height: 1280, image: 'https://cdn.myportfolio.com/6ddb748e7455b951706cf3e4b96619a0/f1223916-6a00-445c-a5fe-ea3c23b86c73_rw_1920.jpg?h=11c63acd47bb1561e1d5b2af6f05a09e'},
      {id: 8, width: 1920, height: 1281, image: 'https://cdn.myportfolio.com/6ddb748e7455b951706cf3e4b96619a0/2772febf-9985-48b1-b449-8d0b457576dd_rw_1920.jpg?h=4ae0a90f4bc69937fd78ce92376b0d97'},
      {id: 9, width: 1920, height: 1280, image: 'https://cdn.myportfolio.com/6ddb748e7455b951706cf3e4b96619a0/6c82bf8c-6f06-4746-b984-3d6c23e1e10c_rw_1920.jpg?h=f8b418fe98c740aeba217b07b444fa70'},
      {id: 10, width: 800, height: 1200, image: 'https://cdn.myportfolio.com/6ddb748e7455b951706cf3e4b96619a0/c7d7bdfb-d285-4da4-b752-bcb55223405b_rw_1200.jpg?h=13a52ff06e18e34ff4e747106771eb2a'},
      {id: 11, width: 799, height: 1199, image: 'https://cdn.myportfolio.com/6ddb748e7455b951706cf3e4b96619a0/d1483029-5220-4622-b889-e19e5ce44f98_rw_1200.jpg?h=37aed17cc7528a6f32e9c16ddeafbef7'},
      {id: 12, width: 1920, height: 1281, image: 'https://cdn.myportfolio.com/6ddb748e7455b951706cf3e4b96619a0/87c94581-9d2a-4510-8c73-d6f7c19421a3_rw_1920.jpg?h=d5d639cde872a27ecfbef174c4aa401b'},
      {id: 13, width: 934, height: 1399, image: 'https://cdn.myportfolio.com/6ddb748e7455b951706cf3e4b96619a0/5afa984d-771a-45df-8d6f-93436766ebaf_rw_1200.jpg?h=1edb338ad422fbdb2a4246b4691cc442'},
      {id: 14, width: 600, height: 317, image: 'https://cdn.myportfolio.com/6ddb748e7455b951706cf3e4b96619a0/60eb4b59-3e5c-4eeb-aec7-375e50aa9149_rw_600.gif?h=1ca647d8922c341a3c0e07b41099b1dd'},
      {id: 15, width: 933, height: 1400, image: 'https://cdn.myportfolio.com/6ddb748e7455b951706cf3e4b96619a0/0e8dff12-b986-4fe9-b069-5f067f55c43a_rw_1200.jpg?h=6493b79b9738d79aa4d17d5ae378785c'},
    ];

    data = data.map(item => {
      item.thumbnailURL = item.image;
      item.largeURL = item.image;
      return item;
    });

    return data;
  },
  async getSportsFitness() {
    let data = [
      {id: 1, title: 'Nike Swim | Hydrastrong', slug: '/nike-swim-hydrastrong', width: 1245, height: 934, image: 'https://cdn.myportfolio.com/6ddb748e7455b951706cf3e4b96619a0/4f54eef3-a37e-4136-8e6f-a51db87a8762_rwc_33x0x1245x934x1280.jpg?h=a86ed4b859f288b5b309535bb8d5a1a6'},
      {id: 2, title: 'LA Marathon | 2021', slug: '/la-marathon-2021', width: 1280, height: 960, image: 'https://cdn.myportfolio.com/6ddb748e7455b951706cf3e4b96619a0/f8c33f6c-2548-42ba-84bf-51827b46e2b1_rwc_100x0x1708x1281x1280.jpg?h=b943a30c3d58923954287ec5a8f9e3ae'},
      {id: 3, title: 'Nike Swim | Hydrastrong', slug: '/nike-swim-hydrastrong', width: 1280, height: 960, image: 'https://cdn.myportfolio.com/6ddb748e7455b951706cf3e4b96619a0/81aedc5e-86db-4c7c-ac7c-78cfe9fe1a9e_carw_4x3x1280.jpg?h=20e1d1e8b8fcb2e75fd513fcd3c2769d'},
      {id: 4, title: 'LA Marathon | 2021', slug: '/la-marathon-2021', width: 1280, height: 960, image: 'https://cdn.myportfolio.com/6ddb748e7455b951706cf3e4b96619a0/29ca0237-f97d-456a-aa55-5284c8cb5470_carw_4x3x1280.jpg?h=7e065e0ad6cb6f5ee87fe822f2de8130'},
      {id: 5, title: 'Nike Swim | Hydrastrong', slug: '/nike-swim-hydrastrong', width: 1280, height: 960, image: 'https://cdn.myportfolio.com/6ddb748e7455b951706cf3e4b96619a0/4c15b933-37bb-492e-a287-b8ab2eea4129_rwc_371x154x1542x1157x1280.jpg?h=f7bfdb3adf4c5c5638d03584d455b329'},
      {id: 6, title: 'LA Marathon | 2021', slug: '/la-marathon-2021', width: 1280, height: 960, image: 'https://cdn.myportfolio.com/6ddb748e7455b951706cf3e4b96619a0/37b5186e-65e6-4bf8-b3ea-d4d94e9d990f_rwc_159x43x1599x1199x1280.jpg?h=49f19cb17b190a4cadde49d305cdcd68'},
      {id: 7, title: 'Nike Swim | Hydrastrong', slug: '/nike-swim-hydrastrong', width: 1280, height: 960, image: 'https://cdn.myportfolio.com/6ddb748e7455b951706cf3e4b96619a0/6cbeea3c-77d6-499c-b47c-4342cc238124_rwc_167x29x1598x1198x1280.jpg?h=532a300634dffa5001001e1488aa3dc2'},
      {id: 8, title: 'LA Marathon | 2021', slug: '/la-marathon-2021', width: 1280, height: 960, image: 'https://cdn.myportfolio.com/6ddb748e7455b951706cf3e4b96619a0/70c6a38d-162f-4a1c-a4a1-476f5ec2f56a_carw_4x3x1280.jpg?h=57c3203b473b30fb60455b92feb6d1ec'},
      {id: 9, title: 'Nike Swim | Hydrastrong', slug: '/nike-swim-hydrastrong', width: 826, height: 620, image: 'https://cdn.myportfolio.com/6ddb748e7455b951706cf3e4b96619a0/e0b0d2ea-a7af-4567-b21d-1aaa475ac506_rwc_48x311x826x620x826.jpg?h=794bad3dbc43fb935500e030e2f33e5e'},
      {id: 10, title: 'LA Marathon | 2021', slug: '/la-marathon-2021', width: 1280, height: 960, image: 'https://cdn.myportfolio.com/6ddb748e7455b951706cf3e4b96619a0/950a5c86-344d-48ab-a31b-2908b4bc0e0b_rwc_192x0x2489x1867x1280.jpg?h=c46e73b61fe48395e694ab2932b60682'},
      {id: 11, title: 'Nike Swim | Hydrastrong', slug: '/nike-swim-hydrastrong', width: 1280, height: 960, image: 'https://cdn.myportfolio.com/6ddb748e7455b951706cf3e4b96619a0/4e7ba706-c3ea-4d2b-af20-2a7a1aae5da8_rwc_372x0x2100x1575x1280.jpg?h=38cf239d4afe44eafecd5bf90e933ee2'},
      {id: 12, title: 'LA Marathon | 2021', slug: '/la-marathon-2021', width: 1280, height: 960, image: 'https://cdn.myportfolio.com/6ddb748e7455b951706cf3e4b96619a0/31b9989c-8f31-49c3-aab1-277618b68627_rwc_85x0x1706x1280x1280.jpg?h=ea9bcd8a43fa456f374291c5a5726cb7'},
    ];

    data = data.map(item => {
      item.thumbnailURL = item.image;
      item.largeURL = item.image;
      return item;
    });

    return data;
  },
};