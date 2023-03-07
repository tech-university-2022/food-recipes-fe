import MainLayout from "../../layouts/MainLayout"
import React, { memo, useCallback, useEffect, useState } from "react"
import "./style.css"
import Pagination from "../../components/Pagination"

const Content = () => {
    const [page, setPage] = useState(0);

    return (
        <div className="home">
            <div className="title">INTRODUCTION</div>
            <p>
                An aim is a goal or objective to achieve in life. In order to succeed in life, one must have a goal. My aim in life is to be a teacher. Teaching is a noble and responsible profession. I have come to know that the ever-increasing misery and distress, are due to the ignorance and illiteracy of the people of our country. So I have decided to spread education among the masses as much as possible within my humble power.
                As a teacher, I shall try my best to impart man-making education. Some say that money is the honey of life. But I do not agree with them. Rather, I think that morality is the real honey of life. I want to be a lovable and respectable person as a teacher in the future.
            </p>
            <Pagination
                numPages={10}
                maxItem={3}
                page={page}
                setPage={(page) => {
                    setPage(page);
                    console.log(page)
                }}
            />
        </div>
    )
}

const Home = () => {
    return (
        <MainLayout content={<Content/>}/>
    )
}

export default memo(Home)