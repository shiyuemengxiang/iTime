// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that=this
      setInterval(function(){
        if (wx.getStorageSync('mark')) {
          that.setData({
            mark: wx.getStorageSync('mark')
          })
        }
        /*

              if(date){
        
        that.setData({
          date:date,
          d:d
        })

        */
        if (wx.getStorageSync('date')) {
          var tt = new Date(wx.getStorageSync('date')).getTime() - new Date().getTime()
          var d = Math.floor(tt / 1000 / 60 / 60 / 24)
          that.setData({
            date: wx.getStorageSync('date'),
            d:d
          })
        }
      },1000)
  },
  mark: function(e){
    console.log(e)
    wx.setStorageSync('mark', e.detail.value)
  },
  setLoc:function(){
   this.mark()
   console.log(wx.getStorageSync(mark))
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