import axios from "axios";

export default class ImageService {
  static async getImagesByTagAndPage(searchQuery='popular', page=1) {
    const response = await axios.get(
      `https://pixabay.com/api/`, {
        params: {
          key: "25801304-57a04d48b0d163a63cce00770",
          q: searchQuery,
          page: page,
          image_type: "photo",
          orientation: "horizontal",
          per_page: 12
        }
      }
    );
    return response.data;
  }
}
