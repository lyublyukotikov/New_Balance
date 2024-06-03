import { IProduct } from "@/types/product.interface";
import axios from "axios";
const PRODUCTS = "https://6659bbebde346625136db5e1.mockapi.io/products";

export const ProductService = {
  async getAll() {
    const { data } = await axios<IProduct[]>({
      url:PRODUCTS,
      method:"GET",
    });
    return data
  },
};
