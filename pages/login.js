import React, {useEffect} from 'react'
import tw from 'tailwind-styled-components';
import {useRouter} from 'next/router';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { auth, provider } from '../firebase';

const Login = () => {
    const router = useRouter();


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                router.push('/')
            }
        })
    }, []);

  return (
    <Wrapper>
        <UberLogo src='https://i.ibb.co/Kxf5jXW/Uber-Logo-wine-1.png' />
        <Title>Log in to access your account</Title>
        <HeadImage src='https://i.ibb.co/fQD8bZr/Signup-svg.png' />
        <SignInButton onClick={() => signInWithPopup(auth, provider)}>Sign In With Google</SignInButton>
    </Wrapper>
  )
}

export default Login


const Wrapper = tw.div`
    w-screen h-screen flex flex-col bg-gray-200 p-4
`
const SignInButton = tw.button`
    bg-black text-white text-center py-4 w-full mt-8
`
const UberLogo = tw.img`
    h-20 w-auto object-contain self-start
`
const Title = tw.div`
text-5xl pt-4 text-gray-500 mb-4
`
const HeadImage = tw.img`
    object-contain max-w-md self-center
`
