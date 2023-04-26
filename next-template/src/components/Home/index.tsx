import React from 'react'
import { useQuery,useMutation } from 'react-query'
import { RandomPost } from '@/services/helper/PostApi'
import { AddPost } from '@/services/helper/PostApi';
import auth from "../../auth/index"

const Homecomp = () => {
  const queryParams = {}
  const paramsData:any = { queryParams, isAuthorized: true };
  // const {isLoading,error,data} = useQuery(["randompost"], () => RandomPost(paramsData), {
  //     retry: false,
  //     keepPreviousData: true,
  //     refetchOnWindowFocus: false,
  //     mutationKey: "randompost",
  //     onSuccess: (res) => {
  //       if (res?.status === true) {
  //         if (res?.data?.length > 0) {
  //           console.log("success...")
  //         } else {
  //           console.log('No..')
  //         }
  //       } else if (res.status === false) {
  //       }
  //     },
  //   });

 const {mutate} = useMutation(AddPost,{
        mutationKey: "addPost",
        onSuccess: (data: any) =>{
          if(data?.status === false) {
            alert("wrong")
         } else if(data?.status === true) {
           alert('added');
         }
        },
        onError: () => {
          alert("there was an error");
        },
        onSettled: () => {},
 });

//  const handleClick = () => {
//     mutate({
//       userId: 110,
//     id: 101,
//     title: "this posta in mine",
//     body: "hey! How are you "
//     })
//  }
    

  return (
    <div>
      {/* <button className='py-5 px-10 rounded-md bg-zinc-500 text-white m-10' onClick={handleClick}>Add post </button>
      {isLoading ? <h1>Loading...</h1> : ""}
        <h1 className='text-yellow-700 text-center text-3xl'>Random posts</h1>
        <ul className='my-4'>
           {data?.map((items:any,index:number) => <li key={index} className='text-yellow-600'><span className='mx-3'>{index + 1}.</span> {items.title}</li>
           )}
        </ul> */}
        <h2 className='text-red-700'>HOme Component.</h2>
    </div>
  )
}

export default auth(Homecomp)