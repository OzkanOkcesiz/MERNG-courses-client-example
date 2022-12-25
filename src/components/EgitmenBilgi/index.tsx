import React from 'react'
import { FaEnvelope, FaIdBadge } from 'react-icons/fa'

const EgitmenBilgi = ({ egitmen }: any) => {
    return (
        <>
            <h5 className='mt-5' > Egitmen Bilgiler </h5>
            <ul className='list-group'>
                <li className='list-group-item'>
                    <FaIdBadge /> {egitmen.isim}
                </li>
                <li className='list-group-item'>
                    <FaEnvelope /> {egitmen.email}
                </li>
            </ul>
        </>
    )
}

export default EgitmenBilgi
