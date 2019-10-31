import React, { useState, useEffect, useContext } from 'react';
import { TypicodeContext } from '../../TypicodeContext/TypicodeContext';
import { useDispatch, useSelector } from 'react-redux';
export default function PostDetails() {
    const state = useSelector((state) => state.posts);
    const selectedId = state.selectedId;
    const typicodeService = useContext(TypicodeContext);

    const [postDetails, setPostDetails] = useState(null);
    useEffect(() => {
        selectedId && typicodeService.getPost(selectedId).then((post) => setPostDetails(post.data))
    }, [selectedId])


    if (!postDetails) return false;

    return (
        <div className="post-details">
            {postDetails.id} | {postDetails.title}
        </div>
    )
}
