"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    value: "about",
    question: "Qreview là website gì?",
    answer:
      "Qreview là nền tảng cung cấp thông tin, đánh giá và so sánh sản phẩm từ nhiều sàn thương mại điện tử, giúp người dùng đưa ra quyết định mua hàng thông minh.",
  },
  {
    value: "sell",
    question: "Qreview có trực tiếp bán sản phẩm không?",
    answer:
      "Không. Qreview không bán sản phẩm trực tiếp mà chỉ đóng vai trò trung gian giới thiệu và dẫn link tới các sàn thương mại điện tử.",
  },
  {
    value: "price",
    question: "Giá sản phẩm trên Qreview có chính xác không?",
    answer:
      "Giá được cập nhật theo thông tin công khai tại thời điểm đăng bài và có thể thay đổi theo chương trình khuyến mãi của từng sàn.",
  },
  {
    value: "review",
    question: "Đánh giá trên Qreview có khách quan không?",
    answer:
      "Chúng tôi luôn hướng đến sự khách quan dựa trên trải nghiệm, dữ liệu và phản hồi người dùng. Tuy nhiên đánh giá mang tính tham khảo.",
  },
  {
    value: "affiliate",
    question: "Qreview có nhận hoa hồng từ link mua hàng không?",
    answer:
      "Có. Qreview hoạt động theo mô hình affiliate. Hoa hồng không làm tăng giá sản phẩm và không ảnh hưởng đến nội dung đánh giá.",
  },
  {
    value: "privacy",
    question: "Qreview có thu thập dữ liệu cá nhân không?",
    answer:
      "Qreview chỉ thu thập thông tin cần thiết để cải thiện trải nghiệm và cam kết không bán hay chia sẻ dữ liệu trái phép.",
  },
]

export default function FAQClient() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full rounded-2xl border shadow-sm mb-4"
    >
      {faqs.map((faq) => (
        <AccordionItem
          key={faq.value}
          value={faq.value}
          className="px-6"
        >
          <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
            {faq.question}
          </AccordionTrigger>

          <AccordionContent className="text-gray-600 leading-relaxed">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
