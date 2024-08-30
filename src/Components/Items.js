import React, { Components } from 'react'
import Item from '.\src\Item'

export class Items extends Component {
render() {
return (
<main>
    {this.props.items.map(el=>(
    <Item key={el.id} item={el} onAdd={this.props.onAdd}/>
    ))}
</main>
)
}
}
export default Items