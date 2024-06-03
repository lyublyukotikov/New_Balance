import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/ui/hero/Hero";
import Catalog from "@/components/ui/catalog/Catalog"
import { ProductService } from "@/services/product.service";
async function getProducts(){
  const data = await ProductService.getAll()
  return data
}
export default async function Page() {
 


  const data = await getProducts ()
  return (
  
      <Catalog products={data} isFull/>
 
  );
}
