import React from 'react'

export default function Store (props) {
	console.log(props)
	const arr = props.finalStore


	if (props.formData.sortBy === 'alphabetically') {
		arr.sort(function (a, b) {
			var nameA = a.name.toUpperCase();
			var nameB = b.name.toUpperCase();
			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}
			return 0;
		});
	}
	if (props.formData.sortBy === 'price-low-high') {
		arr.sort(function (a, b) {
			return a.price - b.price;
		});
	}
	if (props.formData.sortBy === 'price-high-low') {
		arr.sort(function (b, a) {
			return a.price - b.price;
		});
	}

	return arr.map(item => {
		return (
			(props.formData.filterType === '' || (item.type === props.formData.filterType)) &&
			<li key={ item.id } >
				<div class="store--item-icon">
					<img src={ "/assets/icons/" + item.id + '.svg' } alt={ item.name } />
				</div>
				<button onClick={ () => props.addToCart(item) }>Add to cart</button>
			</li>
		)
	})

}