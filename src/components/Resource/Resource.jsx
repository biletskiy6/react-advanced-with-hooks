import React, { useContext, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { setPostsAction, fetchPostsError } from '../../redux/actions/postsActions';
export default function Resource(props) {
    const dispatch = useDispatch();
    const state = useSelector((state) => state[props.state]);

    const { getData, render, dispatchData, dispatchError } = props;
    useEffect(() => {
        console.log(1);
        getData()
            .then(({ data }) => dispatch(dispatchData(data)))
            .catch((err) => dispatch(dispatchError(err)));
    }, []);
    const { loading, errors, data } = state;

    if (loading) return <CircularProgress size={20} />
    if (errors) return 'ERROR!!!!!!!!!';
    return render(data);
}  