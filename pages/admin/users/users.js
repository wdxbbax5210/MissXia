// pages/admin/users/users.js

const config = require("../../../config");

var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 用户列表
    // TODO 从server端拉取
    userList: null,

    // 是否显示loading
    showLoading: false,

    // loading提示语
    loadingMessage: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserList();
  },

  /**
   * 查询用户列表
   * 目前为本地缓存数据 + 本地假数据
   * TODO 从服务端拉取
   */
  getUserList: function () {
    var that = this;
    app.getUserList(list => {
      that.setData({ userList: list });
    })
  },

  initSwiper: function () {
    var startPos = endPos = {};
    $("#swiper li").on("touchstart", function (event) {
      startPos = {
        x: event.targetTouches[0].pageX,
        y: event.targetTouches[0].pageY
      }
    });
    $("#swiper li").on("touchmove", function (event) {
      endPos = {
        x: event.targetTouches[0].pageX - startPos.x,
        y: event.targetTouches[0].pageY - startPos.y
      };
      //阻止横向滑动浏览器默认事件，竖直方向不阻止，否则无法上下翻动网页了
      isScrolling = Math.abs(endPos.x) < Math.abs(endPos.y) ? 1 : 0;
      if (isScrolling === 0) {
        event.preventDefault();
      }
      /*
       * 1、以下设定触发的阈值，滑动每一个li不会有拖动效果，但是功能已经实现
       * 2、如果希望有拖动跟随效果，可以利用endPos.x的值来设定 margin-left 的值
       * 2、当然拖动范围是和按钮宽度有关，由于按钮宽度是rem单位，做对比需要用到 flexible.px2rem() 函数转化 endPos.x做对比				 
       */
      Math.abs(endPos.x) < 40 ? endPos.x = 0 : endPos.x;
    });
    $("#swiper li").on("touchend", function (event) {
      if (endPos.x < 0) {
        $(this).animate({
          'margin-left': '-3rem'
        }, 200, 'linear');
      } else {
        $(this).animate({
          'margin-left': '0'
        }, 200, 'linear');
      }
    })
  }
})