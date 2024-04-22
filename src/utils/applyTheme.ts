export default function applyTheme(theme: string) {
  document.documentElement.setAttribute("data-theme", theme)
  localStorage.setItem("theme", theme)
}
