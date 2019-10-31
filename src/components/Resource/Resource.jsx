import React, { useContext, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
export default function Resource(props) {
    const dispatch = useDispatch();
    const state = useSelector((state) => state[props.state]);
    const { getData, render, dispatchData, dispatchError, resetLoadingBeforeRender, deps = [] } = props;

    useEffect(() => {
        if (resetLoadingBeforeRender) dispatch(resetLoadingBeforeRender())
        getData()
            .then(({ data }) => dispatch(dispatchData(data)))
            .catch((err) => dispatch(dispatchError(err)));
    }, deps);
    const { loading, error, data } = state;

    if (loading) return <CircularProgress size={20} />
    if (error) return 'ERROR!!!!!!!!!';
    return render(data);
}  