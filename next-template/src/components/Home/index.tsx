import React from 'react'
import { useQuery } from 'react-query'
import { RandomPost } from '@/services/helper/PostApi'

const Home = () => {
  const queryParams = {}
  const paramsData:any = { queryParams, isAuthorized: true };
  const blogListQueryState = useQuery(["randompost"], () => RandomPost(paramsData), {
      retry: false,
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      mutationKey: "randompost",
      onSuccess: (res) => {
        if (res?.status === true) {
          if (res?.data?.length > 0) {
            console.log("success...")
          } else {
            console.log('No..')
          }
        } else if (res.status === false) {
        }
      },
    });
    console.log("blogListQueryState",blogListQueryState.data);

    // if(blogListQueryState.isLoading ? <h2>Loading...</h2> : null)
    

  return (
    <div>
        <h1 className='text-yellow-700 text-center text-3xl'>Random posts</h1>
        <div>
           {blogListQueryState.data?.map((items:any,index:number) => <span key={index}>{items.title}</span>
           )}
        </div>
    </div>
  )
}

export default Home