import { Menu } from "@/types/Menu";

export const menuData: Menu[] = [
  {
    id: 1,
    title: "Trang chủ",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Cửa hàng",
    newTab: false,
    path: "/shop-with-sidebar",
  },
  {
    id: 3,
    title: "Danh mục",
    newTab: false,
    path: "/",
    submenu: [
      {
        id: 100,
        title: "TV",
        newTab: false,
        path: "/tv",
      },
      {
        id: 101,
        title: "Laptop & PC",
        newTab: false,
        path: "/laptop-pc",
      },
      {
        id: 102,
        title: "Điện thoại & máy tính bảng",
        newTab: false,
        path: "/dien-thoai-may-tinh-bang",
      },
      {
        id: 103,
        title: "Loa & Tai nghe",
        newTab: false,
        path: "/loa-tai-nghe",
      },
      {
        id: 104,
        title: "Đồ gia dụng",
        newTab: false,
        path: "/do-gia-dung",
      },
      {
        id: 105,
        title: "Đồ thể thao",
        newTab: false,
        path: "/do-the-thao",
      },
      {
        id: 106,
        title: "Đồng hồ thông minh",
        newTab: false,
        path: "/dong-ho-thong-minh",
      },
      {
        id: 107,
        title: "Đồ Decor",
        newTab: false,
        path: "/do-decor",
      },
      {
        id: 108,
        title: "Phụ kiện công nghệ",
        newTab: false,
        path: "/phu-kien-cong-nghe",
      }
    ],
  },
  {
    id: 4,
    title: "Liên hệ",
    newTab: false,
    path: "/contact",
  },
  {
    id: 5,
    title: "Trang",
    newTab: false,
    path: "/",
    submenu: [
      {
        id: 61,
        title: "Shop With Sidebar",
        newTab: false,
        path: "/shop-with-sidebar",
      },
      {
        id: 62,
        title: "Shop Without Sidebar",
        newTab: false,
        path: "/shop-without-sidebar",
      },
      {
        id: 64,
        title: "Checkout",
        newTab: false,
        path: "/checkout",
      },
      {
        id: 65,
        title: "Cart",
        newTab: false,
        path: "/cart",
      },
      {
        id: 66,
        title: "Wishlist",
        newTab: false,
        path: "/wishlist",
      },
      {
        id: 67,
        title: "Sign in",
        newTab: false,
        path: "/signin",
      },
      {
        id: 68,
        title: "Sign up",
        newTab: false,
        path: "/signup",
      },
      {
        id: 69,
        title: "My Account",
        newTab: false,
        path: "/my-account",
      },
      {
        id: 70,
        title: "Contact",
        newTab: false,
        path: "/contact",
      },
      {
        id: 62,
        title: "Error",
        newTab: false,
        path: "/error",
      },
      {
        id: 63,
        title: "Mail Success",
        newTab: false,
        path: "/mail-success",
      },
    ],
  },
  {
    id: 6,
    title: "Tin tức",
    newTab: false,
    path: "/blogs/blog-grid-with-sidebar",
  },
];
