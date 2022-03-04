
const Filters = props => {

    const displayFruit = () => {
        const fruits = props.storeItems.filter(x => x.type === 'Fruit')
        props.setStoreItems(fruits)
    }
    const displayVegetables = () => {
        const vegetables = props.storeItems.filter(x => x.type === 'Vegetable')
        props.setStoreItems(vegetables)
    }
    const resetFilter = () => {
        props.setStoreItems(props.initialStoreItems)
    }

    const alphabeticalAToZ = sort => {
        const sorted = props.storeItems.sort((a, b) => {
            if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) return -1
            if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) return 1
            return 0
        })
        return sorted
    }

    const alphabeticalZToA = sort => {
        const sorted = props.storeItems.sort((a, b) => {
            if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) return -1
            if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) return 1
            return 0
        })
        return sorted
    }

    const sort = (sort) => {
        if (sort === 'A-Z') {
            const sorted = alphabeticalAToZ(sort)
            console.log('A-Z', sorted)
            props.setStoreItems(alphabeticalAToZ(sort))
        }
        if (sort === 'Z-A') {
            const sorted = alphabeticalZToA(sort)
            console.log('Z-A', sorted)
            props.setStoreItems(alphabeticalZToA(sort))
        }
    }

    return <section>
        <button className='filter-type' onClick={(e) => { displayFruit() }}>Fruits</button>
        <button className='filter-type' onClick={(e) => { displayVegetables() }}>Vegetables</button>
        <button className='filter-type' onClick={(e) => { resetFilter() }}>Reset</button>

        <select name="sort" className="filter-type" onChange={(e) => { sort(e.target.value) }} >
            <option value="">Sort items by...</option>
            <option value="A-Z" >A - Z</option>
            <option value="Z-A">Z to A</option>
            <option value="price-hightolow">Price high to low</option>
            <option value="price-lowtohigh">Price low to high</option>
        </select>


    </section>
}

export default Filters