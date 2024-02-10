if (!service.disableProviderList) {
    page.appendItem('', 'separator', {
      title: 'Providers',
    });
    page.appendItem('m3u:https%3A%2F%2Fi.mjh.nz%2FSamsungTVPlus%2Fall.m3u8:samsungTVPlus', 'directory', {
      title: 'Samsung TV Plus',
      icon: 'https://bestmediainfo.com/uploads/2023/04/1682423568.stp.jpg',
    });
    page.appendItem('m3u:https%3A%2F%2Fi.mjh.nz%2FPlutoTV%2Fall.m3u8:plutoTV', 'directory', {
        title: 'Pluto TV',
        icon: 'https://i.pcmag.com/imagery/reviews/05IbsCrM5q7vmdnKWUGc23y-16.fit_scale.size_760x427.v1642015336.png',
    });
    page.appendItem('m3u:https%3A%2F%2F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%40raw.githubusercontent.com%2Fpsfreestore%2Fmovianstuff%2Fmain%2Fdodgybox.m3u:dodgybox', 'directory', {
        title: 'DodgyBox - UK Live TV',
        icon: 'https://img.rasset.ie/001ead1c-500.jpg',
    });
  }