// index.js
// 工作台页
import { $wuxPrompt } from '../../wux/dist/components/wux'
const config = require("../../config");

var app = getApp();

Page({

  data: {
    // 日记列表
    // TODO 从server端拉取
    diaries: null,

    // 是否显示loading
    showLoading: false,

    // loading提示语
    loadingMessage: '',

    // 默认网格类型
    type: `grid`,

    // 
    components: [],
  },

  modSwitch(e) {
    this.setData({
      type: e.currentTarget.dataset.type,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    var that = this;
    that.checkUserInfo();
    var userInfo = that.data.userInfo;
    that.userUnAuthCheck(userInfo);
    that.findComponents(userInfo);
  },

  findComponents: function (userInfo) {
    var that = this;
    app.getComponents(components => {
      let list = [];
      // 本地缓存数据
      for (var k in components) {
        var component = components[k];
        if (component.userType == userInfo.userType) {
          list.push(component);
        }
      }
      that.setData({ components: list });
    })
  },

  // 用户是否有审核检查
  userUnAuthCheck: function (userInfo) {
    if (userInfo && userInfo.userType != 1 && userInfo.userType != 2) {
      $wuxPrompt.init('msg3', {
        icon: '../../wux/dist//assets/images/iconfont-empty.png',
        title: '您还未通过审核，请联系物业人员！',
      }).show();
    }
  },

  /**
   * 检查用户信息
   * 目前为本地缓存数据 + 本地假数据
   * TODO 从服务端拉取
   */
  checkUserInfo() {
    var that = this;
    app.checkUserInfo(info => {
      that.setData({ userInfo: info });
    })
  },

  // 查看详情
  showDetail(event) {
    wx.navigateTo({
      url: '../entry/entry?id=' + event.currentTarget.id,
    });
  },

  // 这里处理滚动事件处理
  listenSwiper: function (e) {
    //打印信息
    console.log(e)
  },

  // 跳转用户管理
  usersPage: function (e) {
    wx.navigateTo({
      url: '/pages/admin/users/users'
    })
  },

  // 跳转收费项目
  itemsPage: function (e) {
    wx.navigateTo({
      url: '/pages/admin/items/items'
    })
  },

  // 跳转费用管理
  feePage: function (e) {
    wx.navigateTo({
      url: '/pages/admin/fee/fee'
    })
  },

  // 跳转系统设置
  sysPage: function (e) {
    wx.navigateTo({
      url: '/pages/admin/sys/sys'
    })
  },

  // 跳转费用查询
  feeSearchPage: function (e) {
    wx.navigateTo({
      url: '/pages/fee.search/fee.search'
    })
  }
})
