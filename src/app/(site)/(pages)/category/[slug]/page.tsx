import React from "react";
import CategoryProducts from "@/components/ShopWithoutSidebar/CategoryProducts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danh mục sản phẩm - Qreview",
  description: "Danh sách sản phẩm theo danh mục tại Qreview",
};

const CategoryProductsPage = ({ params }: { params: { slug: string } }) => {
  return (
    <main>
      <CategoryProducts slug={params.slug} />
    </main>
  );
};

export default CategoryProductsPage;
