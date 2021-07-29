export const Popup = (props) => {
    if (props.shown) {
        return(
            <div className="pop" onClick={props.close} >
                <div className="internal" >
                    {props.copy}
                    <button onClick={props.close} className="close">x</button>
                </div>
            </div>
        )
    }
    else {
        return(
            <div style={{display: 'none'}}></div>
        )
    }
}
export default Popup