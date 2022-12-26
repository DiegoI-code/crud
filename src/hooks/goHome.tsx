import React from 'react'
import { useRouter } from 'next/router'


export default function goHome()  {

    const directHome = () => {
        const router = useRouter();
        router.push('/');
    }


  return {
    directHome,
  }
}

