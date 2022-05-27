import request from "~/utils/request";

class HomeService {
  // 获取主题
  static getTheme() {
    return request({
      url: "/api/services/system/StyleInfo/GetStyleInfoUse",
      method: "get"
    });
  }

  // 获取主题
  static getMenus() {
    return request({
      url: "/api/services/system/MenuInfo/GetReleaseMenuAll",
      method: "get"
    });
  }
}

export default HomeService;
