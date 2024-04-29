/* eslint-disable react/prop-types */


export default function Sort({sortCheck}) {



    function handleChange(e){
        sortCheck(e.currentTarget.value) 
    }


    return (
        
        <select onChange={(e) => handleChange(e)} name="sort" id="sort">
            <option value="default">Popularity</option>
            <option value="price-low-high">Price(Low to High)</option>
            <option value="price-high-low">Price(High to Low)</option>
        </select>
    )
}
