//index.js
Page({
  data: {
    currentId:'view1',
    scrollList:[
      {
        name: 'view1',
  src:'https://hbimg.huabanimg.com/23abe6db85a2a459aef5ef23404cf5fa97ab8f27286da-1fwpJ1_fw658'
      }, {
        name: 'view2',
        src:'https://hbimg.huabanimg.com/3a04236b9b70d2d8da40b3714992d1680ee9c4c95bb1d-h2qDGS_fw658'
      }, {
        name: 'view3',
        src: 'https://hbimg.huabanimg.com/43c6fb6653e1cf6f6949c62b42d647e075e4802f7f645-JBk7kj_fw658'
      }, {
        name: 'view4',
        src: 'https://hbimg.huabanimg.com/a2c4de66edc50b11baf791f458d4b54cef758e4a6e687-TtV5R0_fw658'
      }, {
        name: 'view5',
        src: 'https://hbimg.huabanimg.com/8c786eecb6161b8cc394f547b9083cd4e348a6a834ad5-TvSgtM_fw658'
      }, {
        name: 'view6',
        src: 'https://hbimg.huabanimg.com/6354be2f1eebd0be81bc89d2198de1e2278b750f5d869-IiPLOk_fw658'
      }
    ]
  },
  //事件处理函数
  scrollEvent: function(e) {
    var _this = this;
    var rate = 0.075;
    var left = 195;
    var scrollLeft = 0;
    var num = 0;

    var currentLeft = e.detail.scrollLeft;
    var total = e.detail.scrollWidth;
    var tag = parseFloat(currentLeft / total);

    if (tag < rate) {
      num = 1;
    } else if (tag > rate && tag < rate * 3) {
      num = 2;
      scrollLeft = left;
    } else if (tag > rate * 3 && tag < rate * 5) {
      num = 3;
      scrollLeft = left * 2;
    } else if (tag > rate * 5 && tag < rate * 7) {
      num = 4;
      scrollLeft = left * 3;
    } else if (tag > rate * 7 && tag < rate * 9) {
      num = 5;
      scrollLeft = left * 4;
    } else {
      num = 6
      scrollLeft = left * 5;
    }
    _this.setData({
      scrollLeft: scrollLeft,
      currentId:'view' + num,
      currentLeftId:'view' + (num - 1),
      currentRightId:'view' + (num + 1)
    })
  },
  onLoad: function () {
    var _this = this;
    var num = 1;
    _this.setData({
      currentId: 'view' + num,
      currentLeftId: 'view' + (num - 1),
      currentRightId: 'view' + (num + 1)
    })
  },
})
