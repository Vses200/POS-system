
import GlobalState from './components/GlobalState';
import ShowCart from './components/ShowCart'
import KingOfFilter from './components/Header/KingOfFilter'
import { useState } from 'react'


const Global_State = () => {
    const [idType, setIdType] = useState(0);
  function ChangeForIdType(id) {
    setIdType(id)
  }
  return (
    <GlobalState>
        <ShowCart />
        <KingOfFilter x={ChangeForIdType} typeId={idType}/>
    </GlobalState>
  )
}

export default Global_State
