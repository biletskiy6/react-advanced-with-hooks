import React, { useState, useEffect, useContext } from 'react';
import { TypicodeContext } from '../../TypicodeContext/TypicodeContext';
import { useDispatch, useSelector } from 'react-redux';
import { setPostDetailsAction, fetchPostDetailsError, resetPostDetailsLoadingAction } from '../../redux/actions/postDetailsActions';
import Resource from '../Resource';

export default function PostDetails() {
    const state = useSelector((state) => state.posts);
    const selectedId = state.selectedId;
    const typicodeService = useContext(TypicodeContext);
    if (!selectedId) return 'Choose smth from the list';
    return <Resource
        getData={() => typicodeService.getPost(selectedId)}
        render={(data) => {
            return <h2>{data.title}</h2>;
        }}
        state="postDetails"
        dispatchData={setPostDetailsAction}
        dispatchError={fetchPostDetailsError}
        resetLoadingBeforeRender={resetPostDetailsLoadingAction}
        deps={[selectedId]}
    />
}
