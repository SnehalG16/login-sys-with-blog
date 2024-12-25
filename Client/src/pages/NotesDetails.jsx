import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const NotesDetails = () => {

    // const [notesdata, setNotesdata] = useState([])
        const userdata= useParams()
        console.log(userdata)

        const {notesId}= useParams()
        console.log(notesId)

    const getNotes = () => {
        // const userinfo = JSON.parse(localStorage.getItem("userData"))
        console.log("notes................",notesdata)

        // axios.get(`${import.meta.env.VITE_BASEURL}notes/getsinglenote/${notesId}`, { withCredentials: true })
        //     .then((res) => {
        //         console.log(res)
        //         setNotesdata(res.data)
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })
    }

    useEffect(() => {
        getNotes()
    }, [])


    return (
        <div>
            <h2>Notes result:</h2>
            <div className='d-flex flex-wrap gap-4'>

                {/* {notesdata.length > 0 ? (notesdata.map((el) => <PostCard key={el.id} title={el.title} image={el.noteSImage} discription={el.body} />)) : (<h2>Notes not found:</h2>)} */}

            </div>
        </div>
    )
}

export default NotesDetails
