//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },
register:function(){
  wx.reLaunch({
    url: '../register/register',
  })
},
  login: function () {
    wx.reLaunch({
      url: '../main/main',
    })
  },
  onLoad: function () {
   
  },

})
