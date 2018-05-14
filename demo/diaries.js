var diaries = [
];

var userList = [
  { userId: '12:01', userName: '小糖豆1', userType: 1 },
  { userId: '12:02', userName: '小糖豆2', userType: 2 },
  { userId: '12:03', userName: '小糖豆3', userType: 0 },
];

var userInfo = {
  // 测试数据默认管理员1,用户是2
  userType: 0
};

var components = [
  {
    title: '费用查询',
    remark: '费用查询',
    url: '/pages/fee.search/fee.search',
    icon: '../../wux/dist/assets/images/iconfont-fee.search.png',
    userType: 2,
  },
  {
    title: '用户管理',
    remark: '用户管理',
    url: '/pages/admin/users/users',
    icon: '../../wux/dist/assets/images/iconfont-user.manage.png',
    userType: 1,
  },
  {
    title: '收费项目',
    remark: '收费项目',
    url: '/pages/admin/items/items',
    icon: '../../wux/dist/assets/images/iconfont-fee-items.png',
    userType: 1,
  },
  {
    title: '费用管理',
    remark: '费用管理',
    url: '/pages/admin/fee/fee',
    icon: '../../wux/dist/assets/images/iconfont-fee.manage.png',
    userType: 1,
  },
  {
    title: '系统设置',
    remark: '系统设置',
    url: '/pages/admin/sys/sys',
    icon: '../../wux/dist/assets/images/iconfont-sys.settings.png',
    userType: 1,
  }
];

module.exports = {
  diaries: diaries,
  userInfo: userInfo,
  userList: userList,
  components: components,
};