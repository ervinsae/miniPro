// pages/todo/todo.js
var array = [];
var showLine = false;
var i = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemList: [],
    str: "",
    style: "underline"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  inputHandler: function(event) {
    console.log(event)
    i++
    array.push({"id":i,"title":event.detail.value})
    this.setData({
      itemList: array,
      str: ""
    })
  },

  onItemClick: function(e){
    console.log("click item id:"+e.currentTarget.dataset.id)
    showLine = !showLine
    console.log(showLine)
    this.setData({
      style: showLine == true ? "unset" : "underline"
    })
  }

})