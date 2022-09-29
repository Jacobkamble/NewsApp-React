import React, { Component } from 'react'

export default class Spinner extends Component {
    render() {
        return (
            <div  className='text-center my-1 '>
                <div className="spinner-border my-1 " style={{width: "3rem", height: "3rem"}} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
}
