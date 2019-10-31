import React, { Component } from 'react'
export default ({ onClick, color, children }) => <button onClick={onClick} className={`btn ${color}`}>{children}</button>

