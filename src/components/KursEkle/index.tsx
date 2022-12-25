import { useMutation, useQuery } from '@apollo/client';
import { useState } from 'react'
import { FaList } from 'react-icons/fa'
import { ADD_KURSS } from '../../mutations/kursMutations';
import { GET_EGITMENLER } from '../../queries/egitmenQueries';
import { GET_KURSLAR } from '../../queries/kursQueries';

const KursEkle = () => {

    const [isim, setIsim] = useState('');
    const [aciklama, setAciklama] = useState('');
    const [durum, setDurum] = useState('plan');
    const [egitmenId, setEgitmenId] = useState('');

    const { loading, error, data } = useQuery(GET_EGITMENLER);

    const [kursEkle] = useMutation(ADD_KURSS,{
        variables: {isim, aciklama, durum, egitmenId},
        refetchQueries: [{query: GET_KURSLAR}]
    })

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (isim === '' || aciklama === '') {
            return alert('Alanları doldurunuz')
        }

        console.log(isim, aciklama, durum, egitmenId);

        kursEkle();

        setIsim('');
        setAciklama('');
        setDurum('plan');
        setEgitmenId('');
    }

    if (loading) return null;
    if (error) return <p>Bir Hata oluştu</p>

    return (
        <>
            {!loading && !error && (
                <div className='text-center'>
                    <button
                        type='button'
                        className='btn btn-warning'
                        data-bs-toggle="modal"
                        data-bs-target="#kursEkleModal"
                    >
                        <div className='d-flex align-items-center'>
                            <FaList className='icon' />
                            <div>Kurs Ekle</div>
                        </div>
                    </button>
                    <div className='modal fade' id='kursEkleModal' aria-labelledby='kursEkleModalLabel' aria-hidden='true'>
                        <div className='modal-dialog'>
                            <div className='modal-content'>
                                <div className='modal-header'>
                                    <h5 className='modal-title' id='kursEkleModalLabel'>
                                        Kurs Ekle
                                    </h5>
                                    <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                                </div>
                                <div className='modal-body'>
                                    <form onSubmit={handleSubmit}>
                                        <div className='mb-3'>
                                            <label className='form-label' >İsim</label>
                                            <input
                                                type='text'
                                                className='form-control'
                                                id='isim'
                                                value={isim}
                                                onChange={(e) => setIsim(e.target.value)} />
                                        </div>
                                        <div className='mb-3'>
                                            <label className='form-label' >Açiklama</label>
                                            <input
                                                type='aciklama'
                                                className='form-control'
                                                id='aciklama'
                                                value={aciklama}
                                                onChange={(e) => setAciklama(e.target.value)} />
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
                                        <div className='mb-3'>
                                            <label className='form-label' >Egitmenler</label>
                                            <select className='form-select' id='egitmenId' value={egitmenId}
                                                onChange={(e) => setEgitmenId(e.target.value)}>
                                                    <option value={''} disabled={true}>Egitmen Seç</option>
                                                    {data.egitmenler.map((e:any) => (
                                                        <option key={e.id} value={e.id}>
                                                            {e.isim}
                                                        </option>
                                                    ))}
                                            </select>
                                        </div>
                                        <button
                                            type='submit'
                                            data-bs-dismiss='modal'
                                            className='btn btn-secondary' >EKLE</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default KursEkle
