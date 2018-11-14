// pages/paper/paper.js
var App = getApp();
var WxParse = require('../../wxParse/wxParse.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    html: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    this.setData({
      html: options.url,
    })

    var that = this;

    wx.request({
      url: options.url,
      //url: 'http://sysutl.com/content/Hello_Mr_Billionaire_3.html',
      //url: 'https://blog.csdn.net/liuyan19891230/article/details/50969393',
      method: 'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },

      success: function(res) {
        console.log(res.data)
        var article = res.data;
        WxParse.wxParse('article', 'html', article, that)
      }
    })

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

  }
})