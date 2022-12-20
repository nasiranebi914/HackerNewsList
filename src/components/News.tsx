import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { IData } from "../constants/DataInterface";

function News({ title, author, url, time }: IData) {
    return (
        <div className='news'>
            <a className='newsTitle' href={url} target='_blank'>{title}</a>
            <div className='authorLink'>
                <p>by {author},&nbsp;{time}</p>
                <a href={url} target='_blank'><BiLinkExternal /></a>
            </div>
        </div>
    )
}
export default News;