// pages/index2/index2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      dateTime:'',
          
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { 
    
    var that = this;
    setInterval(function(){
      var mark = wx.getStorageSync('mark');
      var date = wx.getStorageSync('date');
      if (mark) {
        that.setData({
          mark: mark
        })
      }
      if(date){
        var tt = new Date(date).getTime() - new Date().getTime()
        var d = Math.floor(tt / 1000 / 60 / 60 / 24)
        that.setData({
          date:date,
          d:d
        })
             }
    },1000)
      setInterval(function(){
        let d = new Date()
        var y = d.getFullYear()
        var mon = d.getMonth() + 1
        var day = d.getDate()
        var h = d.getHours()
        var m = d.getMinutes()
        var s = d.getSeconds()
        let old = new Date(y + '-01-01 00:00').getTime();
        let now =new Date().getTime();
        let change = ((now - old) / 1000/31536000*100).toFixed(2);
        var days = new Date(y, mon,0);
       var daycount = days.getDate();
         console.log(daycount)
        var tt = that.setData({
          dateTime: y + '年' + mon + '月' + day + '号' + h + '时' + m + '分' + s + '秒',
          width:change+'%',
          yerWid:'当前: '+mon+'月'+ '/'  + '12月',
          yerPro:(mon/12*100).toFixed(2)+'%',
          dayWid: '当前: ' + h+'时'+ '/' + '24时',
          dayPro:(h / 24 * 100).toFixed(2) + '%',
          monWid: '当前: ' +day + '号 / ' + daycount+'号',
          monPro: (day / daycount*100).toFixed(2)+'%'

        })
        console.log(old)          
      },1000)
      
  
      
  },
  click: function(){
    console.log('click test')
  },
  bindDateChange:function(e){
      this.setData({
        date: e.detail.value
      })
    wx.setStorageSync('date', e.detail.value)
    var tt = new Date(e.detail.value).getTime()-new Date().getTime()
     let d= Math.floor(tt/1000/60/60/24)
     this.setData({
       d:d
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