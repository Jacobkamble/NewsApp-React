import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <>
                <footer style={{ width: "100vw", height: "40px", position: "absolute", left: "0", bottom: "0" }} className=' d-flex align-items-center justify-content-center  mt-4 bg-light container-fluid'>
                    <p style={{ paddingTop: "15px" }}><strong>&copy; 2022 WorldNews</strong></p>
                </footer>
            </>
        )
    }
}
