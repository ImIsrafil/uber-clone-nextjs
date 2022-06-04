import React, {useEffect, useState} from 'react'
import tw from 'tailwind-styled-components';
import Map from './components/Map';
import { useRouter } from 'next/router';
import RideSelector from './components/RideSelector';
import Link from 'next/link';

const Confirm = () => {
    const [pikupCoordinates, setPikupCoordinates] = useState()
    const [dropoffCoordinates, setDropoffCoordinates] = useState()

    const router = useRouter();
    const {pikup, dropoff} = router.query;

    const getPikupCoordinates = (pikup) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pikup}.json?` + 
            new URLSearchParams({
                access_token: "pk.eyJ1IjoiaW1pc3JhZmlsIiwiYSI6ImNrejFqN2dnODFrd2IydXFrZ3l1b3pnNHYifQ.-UbhPITPIRgK8yZ3oMOsdw",
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            setPikupCoordinates(data.features[0].center);
        })
    }

    const getDropoffCoordinates = (dropoff) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + 
            new URLSearchParams({
                access_token: "pk.eyJ1IjoiaW1pc3JhZmlsIiwiYSI6ImNrejFqN2dnODFrd2IydXFrZ3l1b3pnNHYifQ.-UbhPITPIRgK8yZ3oMOsdw",
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            setDropoffCoordinates(data.features[0].center);
        })
    }
    
    useEffect(() => {
        getPikupCoordinates(pikup);
        getDropoffCoordinates(dropoff);
    }, [pikup, dropoff]);

  return (
    <Wrapper>
        <Link href='/search'>
        <BackButton src='https://i.ibb.co/3Thpk6F/free-arrow-left-icon-3099-thumb.png' />
        </Link>
      <SubWrapper>
        <Map
            pikupCoordinates={pikupCoordinates}
            dropoffCoordinates={dropoffCoordinates}
        />
        <RideContainer>
            <RideSelector />
            <ConfirmButtonContainer>
                <ConfirmButton>Confirm UberX</ConfirmButton>
            </ConfirmButtonContainer>
        </RideContainer>
      </SubWrapper>
    </Wrapper>
  )
}

export default Confirm

const BackButton = tw.img`
    absolute w-12 h-12 top-0 left-0 z-10
    bg-gray-100 rounded-full p-2
`

const Wrapper = tw.div`
    relative
`
const RideContainer = tw.div`
    flex-1 flex flex-col h-1/2
`
const ConfirmButtonContainer = tw.div`
    border-t-2
`
const ConfirmButton = tw.div`
    bg-black text-white text-center m-4 text-xl p-4
`
const SubWrapper =  tw.div`
    h-screen flex flex-col
`