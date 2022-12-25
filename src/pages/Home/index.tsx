import React, { useEffect } from 'react'
import Egitmen from '../../components/Egitmen'
import EgitmenEkle from '../../components/EgitmenEkle'
import KursEkle from '../../components/KursEkle'
import Kurslar from '../../components/Kurslar'

import { decodeToken } from 'react-jwt'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_YETKILI } from '../../queries/yetkiliQueries'

const Home = () => {

    const navigate = useNavigate();
    const token: any = localStorage.getItem('token');

    const yetkiliId: any = decodeToken(token);

    let id: any;

    if (yetkiliId !== null) {
        id = yetkiliId.id
    }

    useQuery(GET_YETKILI, {
        variables: { id },
        onCompleted: data => {
            if (!data.yetkili) {
                navigate('/signup')
            }
        }
    })

    useEffect(() => {
        if (!token) navigate('/signup');
        if (id === undefined) navigate('/signup')
    })

    return <>
        <KursEkle />
        <Kurslar />
        <hr />
        <EgitmenEkle />
        <Egitmen />
    </>
}

export default Home
