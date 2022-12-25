import { useMutation } from '@apollo/client';
import { useState } from 'react'
import Spinner from '../../components/Spinner';
import { ADD_YETKILI } from '../../mutations/yetkiliMutations';

const Signup = () => {

    const [email, setEmail] = useState('');
    const [parola, setParola] = useState('');

    const [yetkiliEkle, { loading }] = useMutation(ADD_YETKILI, {
        variables: { email, parola },
        update(proxy, result) {
            window.location.assign('/');
        }
    });

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (email === '' || parola === '') {
            return alert('Lütfen alanlari doldurunuz');
        }

        const yetkili = await yetkiliEkle();

        // console.log(yetkili);
        localStorage.setItem('token', yetkili.data.yetkiliEkle.token);

        setEmail('');
        setParola('');
    }

    if (loading) return <Spinner />

    return (
        <div className='card'>
            <div className='card-body'>
                <h5>Üyelik Oluştur</h5>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='emailAdres' className='form-label'>Email Adresiniz</label>
                        <input type={'email'} className='form-control' id='emailAdres'
                            value={email}
                            onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='parola' className='form-label'>Parola</label>
                        <input type={'password'} className='form-control' id='parola'
                            value={parola}
                            onChange={e => setParola(e.target.value)} />
                    </div>
                    <button type='submit' className='btn btn-primary' >Üye Ol</button>
                </form>
            </div>
        </div>
    )
}

export default Signup
