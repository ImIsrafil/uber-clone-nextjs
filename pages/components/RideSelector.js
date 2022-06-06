import React, {useEffect, useState} from 'react'
import tw from 'tailwind-styled-components'
import { data } from './data'

const RideSelector = ({pikupCoordinates, dropoffCoordinates}) => {

    const [rideDuration, setRideDuration] = useState(0);

    useEffect(() => {
        fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pikupCoordinates[0]},${pikupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiaW1pc3JhZmlsIiwiYSI6ImNrejFqN2dnODFrd2IydXFrZ3l1b3pnNHYifQ.-UbhPITPIRgK8yZ3oMOsdw`)
        .then(response => response.json())
        .then(data => {
            setRideDuration(data.routes[0]?.duration /100)
        })
    }, [pikupCoordinates, dropoffCoordinates]);

  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>
      <CarList>
        {
            data.map((item, index) => (
                <Car key={index}>
                    <CarImage src={item.imgUrl} />
                    <CarDetails>
                        <Service>{item.service}</Service>
                        <Time>5min away</Time>
                    </CarDetails>
                    <Price>${(rideDuration * item.multiplier).toFixed(2)}</Price>
                </Car>
            ))
        }
      </CarList>
    </Wrapper>
  )
}

export default RideSelector


const Wrapper = tw.div`
flex-1 flex flex-col overflow-y-scroll
`
const Title = tw.div`
    text-center text-gray-500 text-xs py-2 border-b
`
const CarList = tw.div`
    flex-1 overflow-y-scroll
`
const Car = tw.div`
    flex p-4 items-center
`
const CarImage = tw.img`
    h-16
`
const CarDetails = tw.div`
    flex-1
`
const Service = tw.div`
    font-medium
`
const Time = tw.div`
    text-xs text-blue-500
`
const Price = tw.div`
`
