# Dark Mode - Cập Nhật Màu Sắc và Transitions

## 📋 Tóm Tắt Cải Thiện

Đã cập nhật toàn bộ giao diện tối (dark mode) của website với các cải thiện sau:

### 🎨 Màu Sắc Mới cho Dark Mode

#### Nền (Backgrounds)
- **Nền chính**: `#1a1f2e` - Xám tối chuyên nghiệp
- **Surface 1**: `#252d3d` - Cho các thành phần nổi bật
- **Surface 2 (Hover)**: `#2f3848` - Trạng thái hover

#### Đường Viền (Borders)
- **Border**: `#3d4557` - Đường viền tinh tế
- **Border Hover**: `#4d5566` - Đường viền nhấn

#### Chữ (Text)
- **Text Chính**: `#f0f4f8` - Sáng, dễ đọc
- **Text Phụ**: `#bcc5d0` - Cho các thông tin phụ
- **Text Muted**: `#8a929f` - Cho các phần tử không quan trọng

### ✨ Cải Thiện Transitions

1. **Smooth Theme Switching**
   - Chuyển đổi giữa light/dark mode mượt mà không bị khựng
   - Dùng `disable-transitions` class để vô hiệu hóa animations trong quá trình chuyển
   - Tất cả các phần tử có transition 0.3s

2. **CSS Transitions được áp dụng**
   ```css
   - background-color: 0.3s ease
   - color: 0.3s ease
   - border-color: 0.3s ease
   - box-shadow: 0.3s ease
   ```

3. **Các phần tử được hỗ trợ**
   - Input fields
   - Buttons
   - Dropdown menus
   - Select elements
   - Carousel buttons
   - Price range slider

### 📝 Tệp Được Cập Nhật

1. **[style.css](src/app/css/style.css)**
   - Cập nhật CSS variables cho dark mode
   - Thêm smooth transitions
   - Optimized dark mode styles

2. **[tailwind.config.ts](tailwind.config.ts)**
   - Cập nhật dark color palette
   - Từ `#1C274C` → `#1a1f2e` (xám tối hơn)

3. **[theme-utils.ts](src/lib/theme-utils.ts)**
   - Cập nhật `updateThemeMode()` function
   - Double requestAnimationFrame để đảm bảo smooth transitions

4. **[theme-switcher.tsx](src/components/Common/theme-switcher.tsx)**
   - Sử dụng `updateThemeMode()` thay vì `applyTheme()`
   - Đảm bảo consistent theme switching

### 🎯 CSS Variables (HSL Format)

#### Light Mode (:root)
```css
--background: 0 0% 100%;           /* #FFFFFF */
--foreground: 222 47% 11%;         /* #1C274C */
--surface: 210 40% 98%;            /* #F9FAFB */
--surface-hover: 214 32% 96%;      /* #F3F4F6 */
--border: 214 20% 90%;             /* #E5E7EB */
--text-primary: 222 47% 11%;       /* #1C274C */
--text-secondary: 220 14% 41%;     /* #606882 */
--text-muted: 220 9% 58%;          /* #8D93A5 */
```

#### Dark Mode (.dark)
```css
--background: 220 13% 13%;         /* #1a1f2e */
--foreground: 210 40% 95%;         /* #f0f4f8 */
--surface: 220 13% 18%;            /* #252d3d */
--surface-hover: 220 13% 23%;      /* #2f3848 */
--border: 220 13% 28%;             /* #3d4557 */
--text-primary: 210 40% 95%;       /* #f0f4f8 */
--text-secondary: 220 12% 75%;     /* #bcc5d0 */
--text-muted: 220 8% 55%;          /* #8a929f */
```

### 🚀 Cách Sử Dụng

1. **Chuyển đổi theme**: Nhấn nút theme switcher trong header
2. **Local Storage**: Theme được lưu tự động để nhớ lựa chọn
3. **System Preference**: Nếu không có lịch sử, sẽ dùng preference của hệ thống

### 💡 Lưu Ý

- Tất cả các màu sắc được định nghĩa trong CSS variables
- Dễ dàng thay đổi toàn bộ theme bằng cách cập nhật variables
- Dark mode hoạt động tốt với tất cả các browser hiện đại
- Không có visual lag khi chuyển đổi theme

### 🔧 Tùy Chỉnh

Nếu muốn thay đổi màu sắc dark mode, chỉnh sửa các CSS variables trong [style.css](src/app/css/style.css) mục `.dark`:

```css
.dark {
  --background: 220 13% 13%;  /* Thay đổi nền tối */
  --foreground: 210 40% 95%;  /* Thay đổi chữ sáng */
  /* ... các variables khác ... */
}
```

---

**Ngày cập nhật**: 16 tháng 1, 2026
**Trạng thái**: ✅ Hoàn tất và được kiểm tra
