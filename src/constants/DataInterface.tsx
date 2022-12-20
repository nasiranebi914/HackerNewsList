export interface IData {
    title: string,
    author: string,
    url: string,
    time: string
}

export interface IPagination {
    totalPages: number,
    currentPage: number,
    setCurrentPage: (num: number) => void
}