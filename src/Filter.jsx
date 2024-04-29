export default function Filter({filterCheck}) {
    
    function handleChange(e){
        console.log(e.currentTarget.value)
        filterCheck(e.currentTarget.value) 
    }

    return (
        <select onChange={e => {handleChange(e)}} name="catagories" id="catagories">
            <option value="all">All</option>
            <option value="fruit">Fruit</option>
            <option value="vegetable">Vegetables</option>
        </select>
    )
}
