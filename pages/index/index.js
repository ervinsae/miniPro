//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  
  onLoad: function () {
    console.log("onload")
    wx.getSetting({
      success: function(res){
        if (res.authSetting['scope.userInfo']){
          wx.getUserInfo({
            success: function(res){
              wx.navigateTo({
                url: '../details/detail?id=' + 20108102208
              })
            }
          })
        }
      }
    })
  },


  getUserInfo: function(e) {
    var that = this;
    console.log("-------getuser")
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })

    if(e.detail.userInfo){//授权
      wx.navigateTo({
        url: '../details/detail?id=' + 20108102208
      })
    } else {//取消授权
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击了“返回授权”')
          }
        }
      })
    }
  }
})
