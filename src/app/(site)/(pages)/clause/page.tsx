import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Điều khoản sử dụng | Qreview",
  description:
    "Điều khoản sử dụng dịch vụ Qreview, quyền và nghĩa vụ của người dùng khi truy cập website.",
};

const navItems = [
  { id: "intro", label: "Giới thiệu" },
  { id: "definitions", label: "Định nghĩa" },
  { id: "scope", label: "Phạm vi dịch vụ" },
  { id: "user-rights", label: "Nghĩa vụ người dùng" },
  { id: "qreview-rights", label: "Trách nhiệm Qreview" },
  { id: "content", label: "Nội dung & đánh giá" },
  { id: "affiliate", label: "Tiếp thị liên kết" },
  { id: "liability", label: "Giới hạn trách nhiệm" },
  { id: "changes", label: "Thay đổi điều khoản" },
  { id: "law", label: "Luật áp dụng" },
  { id: "contact", label: "Liên hệ" },
];

const ClausePage = () => {
  return (
    <main className="bg-gradient-to-b from-slate-50 to-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-pink-600/10" />
        <div className="relative container mx-auto px-4 pt-48 max-w-6xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-1 text-sm font-medium text-white">
            Terms of Use
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Điều khoản sử dụng
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            Các điều khoản này quy định quyền và nghĩa vụ của bạn khi truy cập và
            sử dụng website Qreview. Việc tiếp tục sử dụng đồng nghĩa với việc
            bạn đã đọc, hiểu và đồng ý với nội dung dưới đây.
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* SIDEBAR */}
          <aside className="lg:col-span-3">
            <div className="sticky top-40 rounded-2xl border border-slate-200 p-6 shadow-sm">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Điều khoản
              </p>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="block text-slate-600 hover:text-slate-900 transition"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* CONTENT */}
          <div className="lg:col-span-9 space-y-16">
            {/* Section builder */}
            {[
              {
                id: "intro",
                title: "Giới thiệu",
                content: (
                  <p>
                    Khi truy cập và sử dụng website Qreview, bạn đồng ý tuân thủ
                    các điều khoản và điều kiện được nêu tại đây. Nếu bạn không
                    đồng ý với bất kỳ nội dung nào, vui lòng ngừng sử dụng
                    website.
                  </p>
                ),
              },
              {
                id: "definitions",
                title: "Định nghĩa",
                content: (
                  <ul className="space-y-3">
                    <li>
                      <strong>Qreview:</strong> Website cung cấp thông tin, đánh
                      giá, so sánh sản phẩm và liên kết đến các sàn TMĐT.
                    </li>
                    <li>
                      <strong>Người dùng:</strong> Cá nhân hoặc tổ chức truy cập
                      và sử dụng nội dung trên Qreview.
                    </li>
                    <li>
                      <strong>Bên thứ ba:</strong> Các sàn TMĐT hoặc đối tác liên
                      kết được đề cập trên website.
                    </li>
                  </ul>
                ),
              },
              {
                id: "scope",
                title: "Phạm vi dịch vụ của Qreview",
                highlight: true,
                content: (
                  <p>
                    Qreview chỉ cung cấp nội dung mang tính tham khảo. Chúng tôi
                    không trực tiếp bán sản phẩm, không xử lý thanh toán, giao
                    hàng hoặc bảo hành.
                  </p>
                ),
              },
              {
                id: "user-rights",
                title: "Quyền và nghĩa vụ của người dùng",
                content: (
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Sử dụng website cho mục đích hợp pháp</li>
                    <li>
                      Không sao chép, phân phối lại nội dung khi chưa được phép
                    </li>
                    <li>
                      Không gây ảnh hưởng đến hoạt động, bảo mật hoặc uy tín của
                      website
                    </li>
                    <li>
                      Tự chịu trách nhiệm với quyết định mua hàng của mình
                    </li>
                  </ul>
                ),
              },
              {
                id: "qreview-rights",
                title: "Quyền và trách nhiệm của Qreview",
                content: (
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Cung cấp thông tin trung thực trong khả năng cho phép</li>
                    <li>
                      Có quyền chỉnh sửa hoặc gỡ bỏ nội dung mà không cần báo
                      trước
                    </li>
                    <li>
                      Không chịu trách nhiệm với tranh chấp giữa người dùng và
                      bên thứ ba
                    </li>
                  </ul>
                ),
              },
              {
                id: "content",
                title: "Nội dung đánh giá và so sánh",
                content: (
                  <p>
                    Nội dung trên Qreview được tổng hợp từ nhiều nguồn khác nhau
                    và có thể không phản ánh chính xác 100% tại mọi thời điểm.
                  </p>
                ),
              },
              {
                id: "affiliate",
                title: "Tiếp thị liên kết (Affiliate)",
                highlight: true,
                content: (
                  <p>
                    Qreview có thể nhận hoa hồng khi bạn mua hàng qua liên kết
                    affiliate. Khoản hoa hồng này không làm tăng giá sản phẩm và
                    không ảnh hưởng đến tính khách quan của nội dung.
                  </p>
                ),
              },
              {
                id: "liability",
                title: "Giới hạn trách nhiệm",
                content: (
                  <p>
                    Qreview không chịu trách nhiệm đối với bất kỳ thiệt hại trực
                    tiếp hoặc gián tiếp nào phát sinh từ việc sử dụng website,
                    bao gồm mất dữ liệu, doanh thu hoặc tranh chấp mua bán.
                  </p>
                ),
              },
              {
                id: "changes",
                title: "Thay đổi điều khoản sử dụng",
                content: (
                  <p>
                    Điều khoản có thể được cập nhật bất kỳ lúc nào. Việc tiếp tục
                    sử dụng website sau cập nhật đồng nghĩa với việc bạn chấp
                    nhận các thay đổi đó.
                  </p>
                ),
              },
              {
                id: "law",
                title: "Luật áp dụng",
                content: (
                  <p>
                    Các điều khoản này được điều chỉnh và giải thích theo pháp
                    luật Việt Nam.
                  </p>
                ),
              },
              {
                id: "contact",
                title: "Liên hệ",
                content: (
                  <p>
                    Nếu bạn có câu hỏi liên quan đến điều khoản sử dụng, vui lòng
                    liên hệ Qreview qua email hoặc trang liên hệ chính thức.
                  </p>
                ),
              },
            ].map((section) => (
              <section key={section.id} id={section.id}>
                <div className="mb-4 flex items-center gap-4">
                  <div className="h-8 w-1 rounded-full bg-slate-900" />
                  <h2 className="text-2xl font-semibold text-slate-900">
                    {section.title}
                  </h2>
                </div>

                <div
                  className={`rounded-2xl p-6 leading-relaxed ${
                    section.highlight
                      ? "bg-slate-100 border border-slate-200"
                      : "border border-slate-200"
                  }`}
                >
                  <div className="text-slate-700">{section.content}</div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ClausePage;
