import React, { Dispatch, SetStateAction } from 'react'
import { MainLink } from './MainLink'
import { CloseButton } from './CloseButton'

interface Props {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export const MainLinkBlock: React.FC<Props> = ({ setMenuOpen }) => {
  return (
    <>
      <CloseButton 
          setMenuOpen={setMenuOpen}
        />
        <MainLink 
          setMenuOpen={setMenuOpen}
        />
    </>
  )
}
