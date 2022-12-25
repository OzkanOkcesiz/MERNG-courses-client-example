import React from 'react'
import {Link} from 'react-router-dom'

const KursCard = ({ kurs }: any) => {
    return (
        <div className='col-md-6'>
            <div className='card mb-3'>
                <div className='card-body'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h5 className='card-title'> {kurs.isim} </h5>
                        <Link className='btn btn-primary' to={`kurslar/${kurs.id}`} >
                            İncele
                        </Link>
                    </div>
                    <p className='small' >
                        Durun: <strong> {kurs.durum} </strong>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default KursCard
