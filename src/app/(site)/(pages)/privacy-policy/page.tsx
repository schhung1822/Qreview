import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chính sách & Bảo mật | Qreview",
  description:
    "Chính sách bảo mật, quyền riêng tư và mô hình hoạt động của Qreview.",
};

const sections = [
  { id: "intro", label: "Giới thiệu" },
  { id: "model", label: "Mô hình hoạt động" },
  { id: "data", label: "Thu thập thông tin" },
  { id: "usage", label: "Mục đích sử dụng" },
  { id: "cookie", label: "Cookie" },
  { id: "third-party", label: "Bên thứ ba" },
  { id: "security", label: "Bảo mật" },
  { id: "objectivity", label: "Tính khách quan" },
  { id: "update", label: "Cập nhật chính sách" },
  { id: "contact", label: "Liên hệ" },
];

const PrivacyPolicyPage = () => {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-pink-600/10" />
        <div className="relative container mx-auto px-4 pt-48 max-w-6xl text-center">
          <span className="inline-block mb-4 rounded-full bg-gray-900 px-4 py-1 text-sm font-medium">
            Legal & Transparency
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Chính sách & Bảo mật
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            Qreview cam kết minh bạch trong cách chúng tôi thu thập, sử dụng và
            bảo vệ dữ liệu, đồng thời duy trì sự khách quan trong mọi nội dung
            đánh giá.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* SIDEBAR */}
          <aside className="lg:col-span-3">
            <div className="sticky top-40 rounded-2xl border border-gray-200 p-6 shadow-sm ">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
                Nội dung
              </p>
              <ul className="space-y-3">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="block text-gray-600 hover:text-gray-900 transition"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="lg:col-span-9 space-y-14">
            {/* Section component */}
            {[
              {
                id: "intro",
                title: "Giới thiệu",
                highlight: true,
                content: (
                  <p>
                    Qreview là nền tảng chia sẻ thông tin, đánh giá và so sánh sản
                    phẩm từ nhiều sàn thương mại điện tử khác nhau. Chúng tôi tôn
                    trọng quyền riêng tư và xem việc bảo vệ dữ liệu người dùng là
                    trách nhiệm cốt lõi trong quá trình vận hành website.
                  </p>
                ),
              },
              {
                id: "model",
                title: "Mô hình hoạt động",
                highlight: true,
                content: (
                  <p>
                    Qreview không trực tiếp bán sản phẩm. Website hoạt động theo
                    mô hình <strong>Affiliate Marketing</strong>. Khi người dùng
                    click liên kết và mua hàng tại sàn thương mại điện tử,
                    Qreview có thể nhận hoa hồng —{" "}
                    <strong>không làm thay đổi giá bán</strong>.
                  </p>
                ),
              },
              {
                id: "data",
                title: "Thông tin chúng tôi thu thập",
                highlight: true,
                content: (
                  <ul className="list-disc pl-5 space-y-2">
                    <li>IP, trình duyệt, thiết bị, thời gian truy cập</li>
                    <li>Trang đã xem, liên kết đã click</li>
                    <li>Thông tin người dùng tự nguyện cung cấp</li>
                  </ul>
                ),
              },
              {
                id: "usage",
                title: "Mục đích sử dụng thông tin",
                highlight: true,
                content: (
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Nâng cao trải nghiệm và chất lượng nội dung</li>
                    <li>Phân tích hiệu quả bài viết</li>
                    <li>Hỗ trợ người dùng và phòng chống gian lận</li>
                  </ul>
                ),
              },
              {
                id: "cookie",
                title: "Cookie",
                highlight: true,
                content: (
                  <p>
                    Qreview sử dụng cookie để ghi nhớ tùy chọn và đo lường hành
                    vi truy cập. Cookie affiliate do sàn thương mại điện tử quản
                    lý nhằm xác nhận hoa hồng khi phát sinh đơn hàng.
                  </p>
                ),
              },
              {
                id: "third-party",
                title: "Liên kết bên thứ ba",
                highlight: true,
                content: (
                  <p>
                    Website có thể chứa liên kết đến bên thứ ba. Qreview không
                    chịu trách nhiệm về nội dung hoặc chính sách bảo mật của các
                    website này.
                  </p>
                ),
              },
              {
                id: "security",
                title: "Bảo mật thông tin",
                highlight: true,
                content: (
                  <p>
                    Chúng tôi áp dụng các biện pháp kỹ thuật hợp lý để bảo vệ dữ
                    liệu. Tuy nhiên, không có hệ thống nào an toàn tuyệt đối.
                  </p>
                ),
              },
              {
                id: "objectivity",
                title: "Tính khách quan của đánh giá",
                highlight: true,
                content: (
                  <p>
                    Nội dung trên Qreview được xây dựng từ dữ liệu công khai,
                    trải nghiệm và phản hồi người dùng. Quyết định mua hàng cuối
                    cùng vẫn thuộc về bạn.
                  </p>
                ),
              },
              {
                id: "update",
                title: "Thay đổi chính sách",
                highlight: true,
                content: (
                  <p>
                    Chính sách có thể được cập nhật bất kỳ lúc nào và có hiệu lực
                    ngay khi công bố trên trang này.
                  </p>
                ),
              },
              {
                id: "contact",
                title: "Liên hệ",
                highlight: true,
                content: (
                  <p>
                    Nếu có câu hỏi liên quan đến chính sách và bảo mật, vui lòng
                    liên hệ qua email hoặc trang liên hệ chính thức của Qreview.
                  </p>
                ),
              },
            ].map((sec) => (
              <section key={sec.id} id={sec.id}>
                <div className="mb-4 flex items-center gap-4">
                  <div className="h-8 w-1 rounded-full bg-gradient-to-b from-indigo-500 to-pink-500" />
                  <h2 className="text-2xl font-semibold text-gray-900">
                    {sec.title}
                  </h2>
                </div>

                <div
                  className={`rounded-2xl p-6 leading-relaxed ${
                    sec.highlight
                      ? "bg-indigo-50 border border-indigo-100"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  <div className="text-gray-700">{sec.content}</div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicyPage;
