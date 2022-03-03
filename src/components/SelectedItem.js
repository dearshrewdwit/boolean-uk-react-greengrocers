function SelectedItem(props) {
  const capitalisedFruitName =
    props.selectedStoreItem.name.charAt(0).toUpperCase() +
    props.selectedStoreItem.name.substring(1)
  return (
    <div class="selected-item">
      <h3>{capitalisedFruitName}</h3>
      <img
        src={`/assets/icons/${props.selectedStoreItem.id}.svg`}
        height="250"
        width="250"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <button onClick={() => props.setSelectedStoreItem(null)}>Go BACK!</button>
    </div>
  )
}

export default SelectedItem
