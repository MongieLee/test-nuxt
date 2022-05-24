import request from "@/utils/request";

class Service {
  static getTheme() {
    return request({
      url: "/api/services/system/StyleInfo/GetStyleInfoUse",
      method: "get"
    });
  }
}

export default Service;
