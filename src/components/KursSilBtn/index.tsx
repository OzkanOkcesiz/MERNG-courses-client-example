import { useMutation } from '@apollo/client';
import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { DELETE_KURS } from '../../mutations/kursMutations';
import { GET_KURSLAR } from '../../queries/kursQueries';

const KursSilBtn = ({kursId}:any) => {

    const navigate = useNavigate();

    const [kursSil] = useMutation(DELETE_KURS,{
        variables:{id: kursId},
        onCompleted: () => navigate('/'),
        refetchQueries:[{query: GET_KURSLAR}]
    })

  return (
    <div className='d-flex mt-5 ms-auto' >
      <button className='btn btn-danger m-2' onClick={() => kursSil()}>
        <FaTrash className='icon' /> Sil
      </button>
    </div>
  )
}

export default KursSilBtn
