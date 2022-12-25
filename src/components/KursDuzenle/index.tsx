import { useMutation } from '@apollo/client';
import React, { useState } from 'react'
import { UPDATE_KURS } from '../../mutations/kursMutations';
import { GET_KURSLAR } from '../../queries/kursQueries';

const KursDuzenle = ({ kurs }: any) => {

  const [isim, setIsim] = useState(kurs.isim);
  const [aciklama, setAciklama] = useState(kurs.aciklama);
  const [durum, setDurum] = useState(() => {
    switch (kurs.durum) {
      case "planlaniyor":
        return "plan"
      case "oluşturuluyor":
        return "olus"
      case "yayinda":
        return "yayin"
      default:
        throw new Error('Bilinmeyen Durum')
    }
  });

  const [kursGuncelle] = useMutation(UPDATE_KURS,{
    variables: {
      id: kurs.id,
      isim,
      aciklama,
      durum
    },
    refetchQueries:[{query: GET_KURSLAR}]
  })

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!isim || !aciklama || !durum) {
      return alert("Tüm Alanlari Doldurunuz")
    }

    console.log(isim, aciklama, durum);
    kursGuncelle();

  }

  return (
    <div className='mt-5'>
      <h3>Kurs Detayini Güncelle</h3>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label className='form-label'>İsim</label>
          <input
            type={"text"}
            className='form-control'
            id='isim'
            value={isim}
            onChange={e => setIsim(e.target.value)} />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Açiklama</label>
          <input
            type={"text"}
            className='form-control'
            id='aciklama'
            value={aciklama}
            onChange={e => setAciklama(e.target.value)} />
        </div>
        <div className='mb-3'>
          <label className='form-label' >Durum</label>
          <select className='form-select' id='durum' value={durum}
            onChange={(e) => setDurum(e.target.value)}>
            <option value={'plan'}>planlaniyor</option>
            <option value={'olus'}>oluşturuluyor</option>
            <option value={'yayin'}>yayinda</option>
          </select>
        </div>
        <button type='submit' className='btn btn-primary'>
          Güncelle
        </button>
      </form>
    </div>
  )
}

export default KursDuzenle
