export const Icon = props => {
    const toggle = () =>props.click(bool => !bool)
    return <img
    onMouseEnter={toggle}
    onMouseLeave={toggle}
    src={`./assets/icons/${props.id}.svg`}
    alt={`${props.name}`}
    />
}