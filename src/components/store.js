import React from 'react'
import initialStoreItems from '../store-items'

export default function Store (props) {
	let finalStore = initialStoreItems

	if (props.formData.sortBy === 'alphabetically') {
		finalStore.sort(function (a, b) {
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
		finalStore.sort(function (a, b) {
			return a.price - b.price;
		});
	}
	if (props.formData.sortBy === 'price-high-low') {
		finalStore.sort(function (b, a) {
			return a.price - b.price;
		});
	}

	return finalStore.map(item => {
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