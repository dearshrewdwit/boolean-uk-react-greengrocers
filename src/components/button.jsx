export default function Button ({description, onClickFunction}) {
  return (
    <button onClick={onClickFunction}>{description}</button>
  )
}