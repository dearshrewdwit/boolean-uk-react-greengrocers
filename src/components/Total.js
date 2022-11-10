function Total ({total}){
    return (
        <span className="total-number">{'£' + (Math.round(total * 100) / 100).toFixed(2)}</span>
    )

}
export default Total