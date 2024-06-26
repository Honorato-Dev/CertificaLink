import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useReducer } from 'react'
import { toast } from 'react-toastify';
import Layout from '@/components/Layout';
import { getError } from '@/utils/error';


function reducer(state:any, action:any){
    switch (action.type) {
         case 'FETCH_REQUEST':
            return {...state, loading: true, error: ''};
         case 'FETCH_SUCCESS':
            return {...state, loading: false, certificals: action.payload, error: ''};
         case 'FETCH_FAIL':
            return {...state, loading: false, error: action.payload};
          case 'CREATE_REQUEST':
            return {...state, loadingCreate:true };
          case 'CREATE_SUCCESS':
             return {...state, loadingCreate:false } ;
           case 'CREATE_FAIL':
              return {...state, loadingCreate:false};  
           case 'DELETE_REQUEST':
            return {...state, loadingDelete:true};   
           case 'DELETE_SUCCESS':
             return {...state, loadingDelete:false, successDelete: true};   
           case 'DELETE_FAIL':
             return {...state, loadingDelete:false};   
           case 'DELETE_RESET':
             return {...state, loadingDelete:false, successDelete:false};   
           default: 
           return state;   
    }
}

const AdmincertificalsScreen = () => {

    const router = useRouter()
    const[{ loading, error, certificals, loadingCreate, successDelete, loadingDelete }, dispatch] = useReducer(reducer,{
        loading:true,
        certificals:[],
        error: '',
    });

    const createHandler = async () => {
        if(!window.confirm('Você tem certeza?')){
            return;
        }
        try{
            dispatch({type:'CREATE_REQUEST'});
            const { data } = await axios.post(`/api/admin/certificals`);
            dispatch({type: 'CREATE_SUCCESS'});
            toast.success('Certificado adicionado com sucesso!')
            router.push(`/admin/certifical/${data.certifical._id}`);
        }catch(err){
            dispatch({type: 'CREATE_FAIL'});
            toast.error(getError(err))
        }
    }
    useEffect(()=> {
        const fetchData = async () => {
            try{
                dispatch({type: 'FETCH_REQUEST'});
                const { data } = await axios.get(`/api/admin/certificals`);
                dispatch({type:'FETCH_SUCCESS', payload:data});
                
            }catch (err) {
                dispatch({type:'FETCH_FAIL', payload:getError(err)}) 
            }
        };
        if(successDelete){
            dispatch({type:'DELETE_RESET'});

        }else{
            fetchData();
        }
        
    },[successDelete])

    const deleteHandler = async (certificalId:any) => {
             if(!window.confirm('Are you sure?')){
                return;
             } 
             try{
                dispatch({type: 'DELETE_REQUEST'});
                await axios.delete(`/api/admin/certificals/${certificalId}`)
                dispatch({type: 'DELETE_SUCCESS'});
                toast.success('Deleted successfully')

             }catch(err){
                dispatch({type: 'DELETE_FAIL'})
                toast.error(getError(err))
             }  
    }
  return (
    <Layout title='Certificals Admin'>
     <div className=''>
    
            <div className='flex flex-col text-center  space-y-16 h-screen '>
                <div className='flex justify-between'>
                   <h1 className='mb-4 text-center text-3xl font-semibold'>Certificals</h1>
                   {loadingDelete && <div>Deleting item...</div>}
                   <button 
                        disabled={loadingCreate} 
                        onClick={createHandler} 
                        className='bg-blue-500 border border-zinc-600 p-3 hover:bg-blue-700'
                        >{loadingCreate ? 'Loading': 'CREATE NEW'}
                     </button>
                </div>
                
                {loading ? (
                 <div>Loading...</div>
                 ): error ? (
                 <div className='alert-error'>{error}</div>
                 ):(
                 <div className=' rounded-md m-2 p-2 '>
                    <table className='w-full'>
                       <thead className='border-b'>
                       <tr>
                                <th className='px-5 text-left'>ID</th>
                                <th className='p-5 text-left'>COURSE</th>
                                <th className='p-5 text-left'>CATEGORY</th>
                                <th className='p-5 text-left'>CONTACT</th>
                                <th className='p-5 text-left'>DATE</th>
                                <th className='p-5 text-left'>DURATION</th>
                                <th className='p-5 text-left'>ACTIONS</th>
                            </tr>
                       </thead> 
                       <tbody>
                         {certificals.map((certifical:any)=> (
                            <tr key={certifical._id} className='border-b'>
                                <td className='p-5'>{certifical._id}</td>
                                <td className='p-5'>{certifical.name}</td>
                                
                                <td className='p-5'>{certifical.category}</td>
                                <td className='p-5'>{certifical.contact}</td>
                                <td className='p-5'>{certifical.date}</td>
                                <td className='p-5'>{certifical.duration}</td>
                                <td className='p-5 flex '>
                                    <div>
                                    <Link className='edit-button' href={`/admin/certifical/${certifical._id}`} passHref >Edit</Link> &nbsp; 
                                    </div>
                                    <div>
                                    <button onClick={()=> deleteHandler(certifical._id)} className='delete-button'>
                                        Delete
                                    </button>
                                    </div>
                                </td>
                            </tr>
                         ))}
                       </tbody>
                    </table>
                 </div>
                 )}
            </div>
      </div>

    </Layout>
  )
}

AdmincertificalsScreen.auth = {adminOnly: true};
export default AdmincertificalsScreen