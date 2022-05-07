import http from "@/http-common";
// import httpHeader from "@/http-common";

const baseUrl = 'http://localhost:3036/api/product';

class ProductDataService {
  getAll() {
    return http.get(baseUrl);
  }

  get(id: string) {
    return http.get(`${baseUrl}/${id}`);
  }

  create(data: any) {
    return http.put(baseUrl, data);
  }

  update(data: any) {
    console.log(data);
    return http.post(baseUrl, data);
  }

  delete(id: any) {
    return http.delete(baseUrl, id);
  }
}

export default new ProductDataService();