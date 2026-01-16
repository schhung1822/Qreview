export function updateThemeMode(value: "light" | "dark") {
  const doc = document.documentElement;
  
  // Thêm class để vô hiệu hóa transitions
  doc.classList.add("disable-transitions");
  
  // Cập nhật theme
  doc.classList.toggle("dark", value === "dark");
  
  // Sử dụng requestAnimationFrame để đảm bảo transitions được tính toán lại
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      doc.classList.remove("disable-transitions");
    });
  });
}

export function updateThemePreset(value: string) {
  document.documentElement.setAttribute("data-theme-preset", value);
}
