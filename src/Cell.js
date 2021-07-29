export const Cell = (props) => {
    return(
        <div  className={'cell cell-'+props.cell} >
            <div onClick={props.handlePieceClick} data-row={props.rowIndex} data-cell={props.index} className="gamePiece"></div>
        </div>
    )
}
export default Cell