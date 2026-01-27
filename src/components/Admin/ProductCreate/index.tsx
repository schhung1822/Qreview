"use client";

import React from "react";

type SpecItem = { key: string; value: string };

type FormState = {
  adminToken: string;
  name: string;
  slug: string;
  priceMin: string;
  priceMax: string;
  categoryId: string;
  brandId: string;
  tagId: string;
  shortDesc: string;
  content: string;
  status: string;
  imagesText: string;
  thumbnailIndex: string;
  specsText: string;
};

const DEFAULT_STATE: FormState = {
  adminToken: "",
  name: "",
  slug: "",
  priceMin: "",
  priceMax: "",
  categoryId: "",
  brandId: "",
  tagId: "",
  shortDesc: "",
  content: "",
  status: "active",
  imagesText: "",
  thumbnailIndex: "0",
  specsText: "",
};

const STORAGE_KEY = "qreview_admin_token";

const ProductCreate = () => {
  const [form, setForm] = React.useState<FormState>(DEFAULT_STATE);
  const [submitting, setSubmitting] = React.useState(false);
  const [message, setMessage] = React.useState<string | null>(null);

  React.useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setForm((prev) => ({ ...prev, adminToken: saved }));
    }
  }, []);

  const updateField = (key: keyof FormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [key]: event.target.value }));
    };

  const parseSpecs = (value: string): SpecItem[] => {
    if (!value.trim()) return [];
    try {
      const parsed = JSON.parse(value);
      if (Array.isArray(parsed)) {
        return parsed
          .map((item) => ({ key: String(item.key ?? ""), value: String(item.value ?? "") }))
          .filter((item) => item.key && item.value);
      }
    } catch {
      // fallback to line-based parsing: key:value
    }

    return value
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const [key, ...rest] = line.split(":");
        return { key: key.trim(), value: rest.join(":").trim() };
      })
      .filter((item) => item.key && item.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setMessage(null);

    if (!form.adminToken.trim()) {
      setMessage("Vui lòng nhập admin token.");
      return;
    }

    if (!form.name.trim()) {
      setMessage("Tên sản phẩm là bắt buộc.");
      return;
    }

    setSubmitting(true);

    const images = form.imagesText
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

    const payload = {
      name: form.name.trim(),
      slug: form.slug.trim() || undefined,
      priceMin: form.priceMin ? Number(form.priceMin) : undefined,
      priceMax: form.priceMax ? Number(form.priceMax) : undefined,
      categoryId: form.categoryId.trim() || undefined,
      brandId: form.brandId.trim() || undefined,
      tagId: form.tagId.trim() || undefined,
      shortDesc: form.shortDesc.trim() || undefined,
      content: form.content.trim() || undefined,
      status: form.status.trim() || undefined,
      images,
      thumbnailIndex: form.thumbnailIndex ? Number(form.thumbnailIndex) : 0,
      specs: parseSpecs(form.specsText),
    };

    try {
      localStorage.setItem(STORAGE_KEY, form.adminToken.trim());
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${form.adminToken.trim()}`,
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (!response.ok) {
        setMessage(result?.error ?? "Không thể thêm sản phẩm.");
        return;
      }

      setMessage(`Đã thêm sản phẩm! ID: ${result.id}`);
      setForm((prev) => ({ ...DEFAULT_STATE, adminToken: prev.adminToken }));
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Có lỗi xảy ra.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-16">
      <div className="max-w-[960px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="rounded-2xl bg-surface dark:bg-surface shadow-1 p-6 sm:p-9">
          <div className="mb-8">
            <h1 className="text-2xl sm:text-heading-5 font-semibold text-foreground">
              Thêm sản phẩm mới (Admin)
            </h1>
            <p className="text-muted mt-2">
              Trang này chỉ dành cho admin. API sẽ từ chối nếu không có token hợp lệ.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2.5">Admin token</label>
              <input
                type="password"
                value={form.adminToken}
                onChange={updateField("adminToken")}
                placeholder="Nhập ADMIN_TOKEN"
                className="rounded-lg border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block mb-2.5">Tên sản phẩm *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={updateField("name")}
                  className="rounded-lg border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                />
              </div>
              <div>
                <label className="block mb-2.5">Slug</label>
                <input
                  type="text"
                  value={form.slug}
                  onChange={updateField("slug")}
                  placeholder="tu-dong neu bo trong"
                  className="rounded-lg border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                />
              </div>
              <div>
                <label className="block mb-2.5">Giá thấp nhất</label>
                <input
                  type="number"
                  value={form.priceMin}
                  onChange={updateField("priceMin")}
                  className="rounded-lg border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                />
              </div>
              <div>
                <label className="block mb-2.5">Giá cao nhất</label>
                <input
                  type="number"
                  value={form.priceMax}
                  onChange={updateField("priceMax")}
                  className="rounded-lg border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                />
              </div>
              <div>
                <label className="block mb-2.5">Category ID</label>
                <input
                  type="text"
                  value={form.categoryId}
                  onChange={updateField("categoryId")}
                  className="rounded-lg border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                />
              </div>
              <div>
                <label className="block mb-2.5">Brand ID</label>
                <input
                  type="text"
                  value={form.brandId}
                  onChange={updateField("brandId")}
                  className="rounded-lg border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                />
              </div>
              <div>
                <label className="block mb-2.5">Tag ID</label>
                <input
                  type="text"
                  value={form.tagId}
                  onChange={updateField("tagId")}
                  className="rounded-lg border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                />
              </div>
              <div>
                <label className="block mb-2.5">Trạng thái</label>
                <select
                  value={form.status}
                  onChange={updateField("status")}
                  className="rounded-lg border border-gray-3 bg-gray-1 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                >
                  <option value="active">active</option>
                  <option value="inactive">inactive</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block mb-2.5">Mô tả ngắn</label>
              <textarea
                value={form.shortDesc}
                onChange={updateField("shortDesc")}
                rows={3}
                className="rounded-lg border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
              />
            </div>

            <div>
              <label className="block mb-2.5">Nội dung</label>
              <textarea
                value={form.content}
                onChange={updateField("content")}
                rows={6}
                className="rounded-lg border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block mb-2.5">Danh sách ảnh (mỗi dòng một URL)</label>
                <textarea
                  value={form.imagesText}
                  onChange={updateField("imagesText")}
                  rows={6}
                  className="rounded-lg border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                />
              </div>
              <div>
                <label className="block mb-2.5">Thumbnail index</label>
                <input
                  type="number"
                  value={form.thumbnailIndex}
                  onChange={updateField("thumbnailIndex")}
                  className="rounded-lg border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                />
                <p className="text-custom-sm text-muted mt-2">
                  Chỉ mục bắt đầu từ 0 trong danh sách ảnh.
                </p>

                <label className="block mb-2.5 mt-5">Thông số kỹ thuật</label>
                <textarea
                  value={form.specsText}
                  onChange={updateField("specsText")}
                  rows={6}
                  placeholder="JSON hoặc mỗi dòng dạng key:value"
                  className="rounded-lg border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                />
              </div>
            </div>

            {message && (
              <div className="rounded-lg border border-gray-3 bg-gray-1 px-4 py-3 text-sm text-foreground">
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full sm:w-auto flex justify-center font-medium text-white bg-dark py-3 px-8 rounded-lg ease-out duration-200 hover:bg-blue disabled:opacity-60"
            >
              {submitting ? "Đang lưu..." : "Thêm sản phẩm"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProductCreate;
