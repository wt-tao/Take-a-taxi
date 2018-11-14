// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sort: false,
    s1: true, s2: false, q3: false, q4:true,
    q1: true,q2: false,
    ids:1,
  },
  bindSorttap: function () {
    this.setData({
      sort: false,
    })
  },
  surr:function(){
    this.setData({
      sort: true,
    })
  },
  // 提交预约
  sure:function() {
    this.setData({
      q1: false, q2: true, q3: false, q1:false,
    })
  },
  // 取消预约
  qxsure:function(){
    var that=this
    wx.showModal({
      title: '取消订单',
      content: '司机正在来的路上！确认取消预约吗？',
      success:function(r){
        if(r.confirm){
          that.setData({
            s1: true, s2: false, q3: false, q4: true,
            q1: true, q2: false,
          })
        }
      }
    })
  },
    
  
  seclect:function(e){
    var ids = e.currentTarget.id
    this.setData({
      ids: ids,
    })
  },
  // 切换多人代驾
  qh:function(){
    this.setData({
      s1:false,s2:true,q3:true,q4:false,
    })
  },
  // 积分
  integral:function(){
    wx.navigateTo({
      url: '../integral/integral',
    })
  },
  // 设置
  set_up:function(){
    wx.navigateTo({
      url: '../set_up/set_up',
    })
  },
  // 订单
  order:function(){
    wx.navigateTo({
      url: '../order/order',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    /*小程序api获取当前位置的坐标*/
    wx.getLocation({
      success: function (res) {
        console.log(res)
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
        /*腾讯地图api */
        wx.request({
          url: 'https://apis.map.qq.com/ws/geocoder/v1/?location=' + res.latitude + ',' + res.longitude + '&key=QPHBZ-INS36-47USQ-EEPJW-E4NR3-FIF42&get_poi=1', data: {},
          header: { 'Content-Type': 'application/json' },
          success: function (ops) {
            console.log(ops.data)
          }
        })
      }
    })
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

  }
})