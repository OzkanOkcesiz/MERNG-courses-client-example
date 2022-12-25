import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_KURSLAR } from '../../queries/kursQueries'
import KursCard from '../KursCard'
import Spinner from '../Spinner'


const Kurslar = () => {

    const { loading, error, data } = useQuery(GET_KURSLAR)

    if (loading) return <Spinner />
    if (error) return <p>Kurslar çekilirken hata oluştu...</p>

    return <>
        {data.kurslar.length > 0 ? (
            <div className='row mt-4'>
                {data.kurslar.map((kurs: any) => (
                    <KursCard key={kurs.id} kurs={kurs} />
                ))}
            </div>
        ) : (<p>Henüz kurs eklenmedi</p>)}
    </>
}

export default Kurslar
