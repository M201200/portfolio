export default function isDescendant(parent: Node | null, child: Node | null) {
  return !!parent && parent !== child && parent.contains(child)
}
