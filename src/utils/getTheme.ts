export default function getTheme() {
  return (
    (localStorage.getItem("theme") as Theme) ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light")
  )
}
