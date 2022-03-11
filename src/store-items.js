
const storeItems =  [
  {
    id: "001-beetroot",
    name: "beetroot",
    price: 0.30,
    category: 'veg',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis mi non sapien pharetra laoreet. In maximus sem mi. Nullam viverra, tortor et tincidunt tincidunt, ex lectus iaculis nibh, quis tincidunt magna nunc dignissim arcu. Quisque ac mauris quis nisi fermentum fringilla a et dui. In tincidunt turpis sit amet nunc lobortis, at lacinia justo dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent elementum dui nisl, at dictum nunc auctor sed. Etiam sit amet nisl vel mi efficitur cursus sit amet quis augue. Donec enim dolor, commodo eu lacus et, finibus convallis quam. Nulla eu faucibus quam. Ut leo ipsum, mattis ut sollicitudin at, consectetur quis tortor.'
  },
  {
    id: "002-carrot",
    name: "carrot",
    price: 0.35,
    category: 'veg',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis mi non sapien pharetra laoreet. In maximus sem mi. Nullam viverra, tortor et tincidunt tincidunt, ex lectus iaculis nibh, quis tincidunt magna nunc dignissim arcu. Quisque ac mauris quis nisi fermentum fringilla a et dui. In tincidunt turpis sit amet nunc lobortis, at lacinia justo dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent elementum dui nisl, at dictum nunc auctor sed. Etiam sit amet nisl vel mi efficitur cursus sit amet quis augue. Donec enim dolor, commodo eu lacus et, finibus convallis quam. Nulla eu faucibus quam. Ut leo ipsum, mattis ut sollicitudin at, consectetur quis tortor.'
  },
  {
    id: "003-apple",
    name: "apple",
    price: 0.40,
    category: 'fruit',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis mi non sapien pharetra laoreet. In maximus sem mi. Nullam viverra, tortor et tincidunt tincidunt, ex lectus iaculis nibh, quis tincidunt magna nunc dignissim arcu. Quisque ac mauris quis nisi fermentum fringilla a et dui. In tincidunt turpis sit amet nunc lobortis, at lacinia justo dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent elementum dui nisl, at dictum nunc auctor sed. Etiam sit amet nisl vel mi efficitur cursus sit amet quis augue. Donec enim dolor, commodo eu lacus et, finibus convallis quam. Nulla eu faucibus quam. Ut leo ipsum, mattis ut sollicitudin at, consectetur quis tortor.'
  },
  {
    id: "004-apricot",
    name: "apricot",
    price: 0.45,
    category: 'fruit',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis mi non sapien pharetra laoreet. In maximus sem mi. Nullam viverra, tortor et tincidunt tincidunt, ex lectus iaculis nibh, quis tincidunt magna nunc dignissim arcu. Quisque ac mauris quis nisi fermentum fringilla a et dui. In tincidunt turpis sit amet nunc lobortis, at lacinia justo dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent elementum dui nisl, at dictum nunc auctor sed. Etiam sit amet nisl vel mi efficitur cursus sit amet quis augue. Donec enim dolor, commodo eu lacus et, finibus convallis quam. Nulla eu faucibus quam. Ut leo ipsum, mattis ut sollicitudin at, consectetur quis tortor.'
  },
  {
    id: "005-avocado",
    name: "avocado",
    price: 0.50,
    category: 'fruit',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis mi non sapien pharetra laoreet. In maximus sem mi. Nullam viverra, tortor et tincidunt tincidunt, ex lectus iaculis nibh, quis tincidunt magna nunc dignissim arcu. Quisque ac mauris quis nisi fermentum fringilla a et dui. In tincidunt turpis sit amet nunc lobortis, at lacinia justo dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent elementum dui nisl, at dictum nunc auctor sed. Etiam sit amet nisl vel mi efficitur cursus sit amet quis augue. Donec enim dolor, commodo eu lacus et, finibus convallis quam. Nulla eu faucibus quam. Ut leo ipsum, mattis ut sollicitudin at, consectetur quis tortor.'
  },
  {
    id: "006-bananas",
    name: "bananas",
    price: 0.55,
    category: 'fruit',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis mi non sapien pharetra laoreet. In maximus sem mi. Nullam viverra, tortor et tincidunt tincidunt, ex lectus iaculis nibh, quis tincidunt magna nunc dignissim arcu. Quisque ac mauris quis nisi fermentum fringilla a et dui. In tincidunt turpis sit amet nunc lobortis, at lacinia justo dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent elementum dui nisl, at dictum nunc auctor sed. Etiam sit amet nisl vel mi efficitur cursus sit amet quis augue. Donec enim dolor, commodo eu lacus et, finibus convallis quam. Nulla eu faucibus quam. Ut leo ipsum, mattis ut sollicitudin at, consectetur quis tortor.'
  },
  {
    id: "007-bell-pepper",
    name: "bell pepper",
    price: 0.60,
    category: 'veg',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis mi non sapien pharetra laoreet. In maximus sem mi. Nullam viverra, tortor et tincidunt tincidunt, ex lectus iaculis nibh, quis tincidunt magna nunc dignissim arcu. Quisque ac mauris quis nisi fermentum fringilla a et dui. In tincidunt turpis sit amet nunc lobortis, at lacinia justo dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent elementum dui nisl, at dictum nunc auctor sed. Etiam sit amet nisl vel mi efficitur cursus sit amet quis augue. Donec enim dolor, commodo eu lacus et, finibus convallis quam. Nulla eu faucibus quam. Ut leo ipsum, mattis ut sollicitudin at, consectetur quis tortor.'
  },
  {
    id: "008-berry",
    name: "berry",
    price: 0.65,
    category: 'fruit',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis mi non sapien pharetra laoreet. In maximus sem mi. Nullam viverra, tortor et tincidunt tincidunt, ex lectus iaculis nibh, quis tincidunt magna nunc dignissim arcu. Quisque ac mauris quis nisi fermentum fringilla a et dui. In tincidunt turpis sit amet nunc lobortis, at lacinia justo dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent elementum dui nisl, at dictum nunc auctor sed. Etiam sit amet nisl vel mi efficitur cursus sit amet quis augue. Donec enim dolor, commodo eu lacus et, finibus convallis quam. Nulla eu faucibus quam. Ut leo ipsum, mattis ut sollicitudin at, consectetur quis tortor.'
  },
  {
    id: "009-blueberry",
    name: "blueberry",
    price: 0.70,
    category: 'fruit',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis mi non sapien pharetra laoreet. In maximus sem mi. Nullam viverra, tortor et tincidunt tincidunt, ex lectus iaculis nibh, quis tincidunt magna nunc dignissim arcu. Quisque ac mauris quis nisi fermentum fringilla a et dui. In tincidunt turpis sit amet nunc lobortis, at lacinia justo dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent elementum dui nisl, at dictum nunc auctor sed. Etiam sit amet nisl vel mi efficitur cursus sit amet quis augue. Donec enim dolor, commodo eu lacus et, finibus convallis quam. Nulla eu faucibus quam. Ut leo ipsum, mattis ut sollicitudin at, consectetur quis tortor.'
  },
  {
    id: "010-eggplant",
    name: "eggplant",
    price: 0.75,
    category: 'veg',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis mi non sapien pharetra laoreet. In maximus sem mi. Nullam viverra, tortor et tincidunt tincidunt, ex lectus iaculis nibh, quis tincidunt magna nunc dignissim arcu. Quisque ac mauris quis nisi fermentum fringilla a et dui. In tincidunt turpis sit amet nunc lobortis, at lacinia justo dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent elementum dui nisl, at dictum nunc auctor sed. Etiam sit amet nisl vel mi efficitur cursus sit amet quis augue. Donec enim dolor, commodo eu lacus et, finibus convallis quam. Nulla eu faucibus quam. Ut leo ipsum, mattis ut sollicitudin at, consectetur quis tortor.'
  }
]

export default storeItems