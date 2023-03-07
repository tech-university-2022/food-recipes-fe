import Footer from "../../components/Footer"
import React, { memo } from "react"

import "./style.css"

const MainLayout = ({content}) => {
    return (
        <div id="main-layout">
            <div className="content">
                {content}
            </div>
            <Footer/>
        </div>
    )
}

export default memo(MainLayout)