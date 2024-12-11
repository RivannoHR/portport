import "./index.scss"

const AnimateText = ({ textClass, strArr, idx }) => {
    return (
        <span>
            {
                strArr.map((char, i) => (
                <span key={char + i} className={`${textClass} _${i + idx}`}>
                    {char}
                </span>
                
                
                ))
                
                
            }
        </span>
    )
}

export default AnimateText;