import React, {useEffect} from 'react'
import tw from 'tailwind-styled-components'
import { data } from './data'

const RideSelector = () => {

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
                    <Price>$04</Price>
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
