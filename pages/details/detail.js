//获取应用实例
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    title: "",
    movie_type: "",
    des: "",
    year: "",
    imageurl: "",
    duration: "",
    alisname: "",
    director: "",
    actor: "",
    time: "",
    assets: [],

    host: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    wx.showToast({
      title: '加载中..',
      icon: 'loading',
      duration: 5000
    })

    this.setData({
      /*name : options.name,
      url : options.url*/
      id: options.id,
    })

    this.onQueryData(this.data.id)

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    const TxvContext = requirePlugin("tencentVideo");

    let txvContext = TxvContext.getTxvContext('txv1') // txv1即播放器组件的playerid值


    //txvContext.play();  // 播放
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

    var that = this;
    wx.showNavigationBarLoading()
    console.log("pull down page");
    that.onQueryData('20108102208')

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  /**
   * 
   */
  gotovideo: function(event) {
    console.log(event)
    wx.navigateTo({
      url: '../paper/paper?url=' + event.currentTarget.dataset.url
    })
  },

  onQueryData: function(id) {
    var that = this;

    wx.request({
      url: app.globalData.baseUrl + 'movie/' + id,

      method: 'GET',

      header: {
        'content-type': 'application/json'
      },

      success: function(res) {
        console.log(res.data);
        wx.hideToast();
        // // 隐藏导航栏加载框
        wx.hideNavigationBarLoading();
        // // 停止下拉动作
        wx.stopPullDownRefresh();
        var data = res.data.retdata;
        that.setData({
          host: app.globalData.baseUrl,

          title: data.name,
          imageurl: app.globalData.baseUrl + data.movie_image,
          //不能使用IP地址
          //imageurl: "../../images/bg.jpg",

          movie_type: data.movie_type,
          des: data.introduction,
          duration: data.duration,
          country: data.country,
          alisname: data.other_name,
          actor: data.protagonist,
          director: data.director,
          time: data.show_date,
          year: data.show_date.split("/")[0],

          assets: data.asset
        });

        wx.setNavigationBarTitle({
          title: data.name,
        })
      },

      fail: function(res) {
        console.log(res.data);
        // // 隐藏导航栏加载框
        wx.hideNavigationBarLoading();
        // // 停止下拉动作
        wx.stopPullDownRefresh();
        wx.showToast({
          title: '网络异常，请重试！',
        })
      }
    })
  }
})