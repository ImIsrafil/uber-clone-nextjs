import React, {useState} from 'react'
import tw from 'tailwind-styled-components';
import Link from 'next/link';
const Search = () => {
  const [pikup, setPikup] = useState('');
  const [dropoff, setDropoff] = useState('');

  return (
    <Wrapper>
      {/* Button Container */}
      <ButtonContainer>
          <Link href='/'>
            <BackButton src='https://i.ibb.co/3Thpk6F/free-arrow-left-icon-3099-thumb.png' />
          </Link>
      </ButtonContainer>
      <InputContainer>
        <FromToIcons>
          <Circle></Circle>
          <Line></Line>
          <Square></Square>
        </FromToIcons>
        <InputBoxes>
          <Input 
            value={pikup}
            onChange={(e) => setPikup(e.target.value)}
            placeholder="Enter pikup location" 
          />
          <Input
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            placeholder='Where to ?' 
          />
        </InputBoxes>
        <PlusIcon src="https://i.ibb.co/zXqJJKP/plus-icon-transparent-0.png" />
      </InputContainer>
      <SavedPlace>
        <StarIcon src='https://i.ibb.co/Q7Wtt0r/white-star-icon-13.png' />
        Saved Place
      </SavedPlace>
      <ConFirmLocation>
        <Link href={{
          pathname: '/confirm',
          query: {
            pikup: pikup,
            dropoff: dropoff
          }
        }}>
        <ConfirmLocationButton>Confirm Location</ConfirmLocationButton>
        </Link>
      </ConFirmLocation>
    </Wrapper>
  )
}

const Wrapper = tw.div`
    bg-gray-200 h-screen
`
const ButtonContainer = tw.div`
    bg-white px-4
    h-12
    flex
    items-center
`
const BackButton = tw.img`
    h-8 cursor-pointer
`
const InputContainer = tw.div`
  bg-white flex items-center gap-2 px-4
`

const FromToIcons = tw.div`
  flex flex-col items-center gap-1
`
const Circle = tw.div`
  w-2 h-2 bg-slate-900 rounded-full
`
const Line = tw.div`
  h-10
  w-[1px] bg-gray-400
`

const Square = tw.div`
  w-2 h-2 bg-slate-900
`
const InputBoxes = tw.div`
  flex-1 flex flex-col
`

const Input = tw.input`
  bg-gray-200 h-10 my-2 rounded outline-none border-none p-2
`
const PlusIcon = tw.img`
  h-10 w-10 bg-gray-200 rounded-full p-2
`
const SavedPlace = tw.div`
  bg-white flex px-4 items-center py-2 gap-1
`
const StarIcon = tw.img`
  w-10 h-10 bg-gray-400 rounded-full p-2
`
const ConFirmLocation = tw.div`
  px-4 py-2
`
const ConfirmLocationButton = tw.button`
  w-full
  text-center text-white bg-black py-2
  cursor-pointer
`





export default Search
