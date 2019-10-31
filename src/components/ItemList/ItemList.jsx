import React, { useState } from 'react'

export default function ItemList(props) {
    const [selectedId, setId] = useState(null);
    const { items } = props;
    return items.slice(0, 10).map((item) => {
        return <p onClick={() => setId(item.id)} key={item.id}>{item.title}</p>
    })
}
