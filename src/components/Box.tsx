interface props {
    letter?: string
}

function Box(props: props) {
    return (
        <div className="box">{props.letter || "a"}</div>
    )
}

export default Box;