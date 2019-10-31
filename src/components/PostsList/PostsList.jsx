import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedPostIdAction } from '../../redux/actions/postsActions';
export default function PostsList(props) {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.posts);
    const { items } = props;
    return items.slice(0, 10).map((item) => {
        const classNames = ['item'];
        if (item.id === state.selectedId) classNames.push("active");
        return <p className={classNames.join(" ")} onClick={() => dispatch(setSelectedPostIdAction(item.id))} key={item.id}>{item.title}</p>
    })
}
