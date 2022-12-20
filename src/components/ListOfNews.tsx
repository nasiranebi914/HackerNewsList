import axios from "axios";
import React, { useEffect, useState } from "react";
import "axios";
import News from "./News";
import Pagination from "./Pagination";
import { IData } from "../constants/DataInterface";

function ListOfNews() {
    const [storiesItems, setStoriesItems] = useState<IData[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(10);
    const indexOfLastData: number = currentPage * pageSize;
    const indexOfFirstData: number = indexOfLastData - pageSize;
    const currentData: IData[] = storiesItems.slice(indexOfFirstData, indexOfLastData);
    const totalPages: number = 100 / pageSize;

    useEffect(() => {
        axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
            .then(function (res) {
                const first100data: string[] = res.data.slice(0, 100);
                setStoriesItems([]);
                first100data.length > 0 && first100data.map((item: string) => {
                    axios.get('https://hacker-news.firebaseio.com/v0/item/' + item + '.json?print=pretty')
                        .then(function (res) {
                            const time = new Date(parseInt(res.data.time) * 1000);
                            const date = (time.getMonth() + 1).toString() + '/' + time.getDate().toString() + '/' + time.getFullYear().toString();
                            const data: IData = {
                                title: res.data.title,
                                author: res.data.by,
                                url: res.data.url,
                                time: date,
                            };
                            setStoriesItems(storiesItems => [...storiesItems, data]);
                            setLoading(false);

                        }).catch(function (err) {
                            console.error(err);
                        });
                })
            }).catch(function (err) {
                console.error(err);
            });

    }, []);
    return (
        <div className='listOfNews'>
            {
                loading ? <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div> :
                    currentData.map((item, i) => (<News title={item.title} author={item.author} url={item.url} time={item.time} key={i} />))


            }
            <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>)
}
export default ListOfNews;