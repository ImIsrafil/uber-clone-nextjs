import {useState, useEffect} from 'react';
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import tw from "tailwind-styled-components";
import Map from './components/Map';
import Link from "next/link";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {useRouter} from 'next/router'


export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    return onAuthStateChanged(auth, user => {
      if (user) {
        setUser({
          name: user.displayName,
          photoURL: user.photoURL
        })
      } else {
        setUser(null)
        router.push("/login")
      }
    })
  },[])

  return (
    <Wrapper>
      <Map></Map>
      <ActionItems>
        <Header>
          <UberLogo src='https://i.ibb.co/Kxf5jXW/Uber-Logo-wine-1.png' />
          <Profile>
            <Name>{user?.name}</Name>
            <UserImage src={user?.photoURL} />
            {
              user && <SignOutButton onClick={() => signOut(auth)}>Sign Out</SignOutButton>
            }
          </Profile>
        </Header>
        <ActionButtons>
          <Link href='/search'>
          <ActionButton>
            <ActionButtonImage src='https://i.ibb.co/0cZcs1H/comfort.png' />
            Rides
          </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src='https://i.ibb.co/JKCTHfb/uber-bike.png' />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src='https://i.ibb.co/2ZMfTcG/booking-svg.png' />
            Reserve
          </ActionButton>
        </ActionButtons>
        <InputButton>Where to?</InputButton>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col h-screen 
`;

const ActionItems = tw.div`
  flex-1 p-4
`;

const Header = tw.div`
  flex justify-between
`
const UberLogo = tw.img`
  h-16
`
const Profile = tw.div`
  flex items-center
`
const Name = tw.div`
  mr-5 text-sm font-bold text-gray-700
`
const UserImage = tw.img`
  h-12 w-12 rounded-full border-[3px] border-solid border-gray-200
`
const SignOutButton = tw.div`
  border px-2 text-xs border-gray-500 py-2 font-bold cursor-pointer
`

const ActionButtons = tw.div`
  flex
`
const ActionButton = tw.div`
 flex items-center flex-col bg-gray-200 flex-1 m-2 h-32
 justify-center rounded-lg text-xl font-semibold
 transform  hover:scale-105 transition
`
const ActionButtonImage =tw.img`
  h-3/5
`
const InputButton = tw.div`
  h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`