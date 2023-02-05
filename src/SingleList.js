import { BiEdit } from "react-icons/bi"
import { IoMdRemoveCircle } from "react-icons/io"

function SingleList({ list, removeItem, editItem }) {

    function active(id) {
        const tggle = document.getElementById(id)
        tggle.classList.toggle('list-title')
    }
    return (<>
        {list.map((item) => {
            const { id, title } = item
            return (<article className="items-container" key={id} id={id}>
                <h3 >{title}</h3>
                <div className="item-btn">
                    <input type="checkbox" onClick={(e) => active(e.target.parentNode.parentNode.id)} />
                    <button onClick={() => editItem(id)} ><BiEdit /></button>
                    <button onClick={() => removeItem(id)}><IoMdRemoveCircle /></button>
                </div>
            </article>)
        })}
    </>)
}

export default SingleList;
// className = { checked? "list-title": null }