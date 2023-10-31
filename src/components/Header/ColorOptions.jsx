export default function ColorOptions({storeItems}) {
  const colorList = Array.from(new Set(storeItems.map(item => item.color))).sort()

  return colorList.map(color => <option key={`colorOption-${color}`} value={color}>{color}</option>)
}