Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:0,
    title:"",
    des:"",
    url:"",
    duration:"",
    alisname:"",
    director:"",
    actor:"",
    time:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    wx.showToast({
      title: '加载中..',
      duration: 1000
    })

    this.setData({
      /*name : options.name,
      url : options.url*/
      id : options.id
    })

    this.onQueryData(this.data.id)

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  onQueryData:function(id){
    var that = this;

    wx.request({
      url: 'http://118.24.46.168/Home/Index/movie?id='+id,

      method: 'GET',

      header: {
        'content-type': 'application/json'
      },

      success: function(res){
        console.log(res.data);
        var data = res.data.retdata;
        that.setData({
          title: data.name,
          url:"http://00.imgmini.eastday.com/mobile/20161028/20161028202106_9f5968897abf2882af89f1193529bdfb_1_mwpm_03200403.jpeg",
          des:data.introduction,
          duration:data.duration,
          alisname:data.other_name,
          actor: data.protagonist,
          director: data.director,
          time:data.show_date
        });

      }
    })
  }
})