import { React, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { fetchTitleData } from '../../../redux/todoAxiosSlice'
 
const TodoAxiosList = () => {
    const dispatch = useDispatch()
    const titleDate = useSelector(state => state.todoAxios.titleData)// <-- 拿取資料

    useEffect(() => {
        dispatch(fetchTitleData())
    }, [dispatch])

    return (
        <ul>
            {titleDate.map((val, index) => (
                <li key={index}>{val.title} : {val.txt}</li>
            ))}
        </ul>
    );
};
 
export default TodoAxiosList