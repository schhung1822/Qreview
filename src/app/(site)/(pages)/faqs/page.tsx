import { Metadata } from "next"
import FAQClient from "./FAQclient"

export const metadata: Metadata = {
  title: "FAQs | Qreview",
  description:
    "Tìm hiểu các câu hỏi thường gặp về dịch vụ của Qreview, cách sử dụng website và các thông tin liên quan.",
}

export default function FAQPage() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white py-24">
      <section className="container mx-auto max-w-4xl px-4 pt-48">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Câu hỏi thường gặp
          </h1>
          <p className="mt-3 text-gray-600">
            Những thắc mắc phổ biến khi sử dụng Qreview
          </p>
        </div>

        {/* Accordion */}
        <FAQClient />
      </section>
    </main>
  )
}
