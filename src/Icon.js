export const Icon = props => {
    return <img
    src={`./assets/icons/${props.id}.svg`}
    alt={`${props.name}`}
    />
}