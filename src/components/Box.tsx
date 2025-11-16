interface props {
    letter: string
}

function Box(props: props) {
    return (
        <div className="box">{props.letter}</div>
    )
}

export default Box;