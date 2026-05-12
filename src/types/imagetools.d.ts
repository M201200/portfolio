declare module '*?picture' {
  const value: {
    sources: { avif?: string; webp?: string; png?: string; jpeg?: string }
    img: { src: string; w: number; h: number }
  }
  export default value
}
