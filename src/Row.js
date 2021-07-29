import { Cell } from "./Cell"
export const Row = (props) => {
    return (
        <div className="row">
            {
                props.rowArr.map(function(cell, index) {
                    return (
                        <Cell rowIndex={props.rowIndex} index={index} cell={cell} handlePieceClick={props.handlePieceClick} />
                    )
                }, this)
            }
        </div>
    )
}
export default Row