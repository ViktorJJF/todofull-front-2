import axios from "axios";
import config from "@/config";

export default {
  getPostImagesRelatedToProduct(productId) {
    return axios.get(
      config.DASHBOARD_BASE_URL +
        `/api/comments-facebook/get_posts_images_related_productid/${productId}`
    );
  },
};
