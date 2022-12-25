import { useQuery}  from '@apollo/client'
import { GET_EGITMENLER } from '../../queries/egitmenQueries';
import EgitmenRow from '../EgitmenRow';
import Spinner from '../Spinner';


const Egitmen = () => {

  const {loading,error,data} = useQuery(GET_EGITMENLER);

  if (loading) return <Spinner />
  if (error) return <p>Egitmenler getirilirken hata oluştu</p>

  
  return (
    <>
    {!loading && !error && (
      <table className='table table-hover mt-3'>
        <thead>
          <tr>
            <th>İsim</th>
            <th>Email</th>
            <th>İşlem</th>
          </tr>
        </thead>
        <tbody>
          {data.egitmenler.map((egitmen: any) => (
            <EgitmenRow egitmen= {egitmen} key= {egitmen.id} />
          ))}
        </tbody>
      </table>
    )}
    </>
  )
}

export default Egitmen
