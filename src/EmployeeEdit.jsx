import React from 'react'
import { useParams } from 'react-router-dom'

export default function employeeEdit(){
    const { id } = useParams()
    return(
        <div>
            <h1>Editing employee: </h1>
        </div>
    )
}