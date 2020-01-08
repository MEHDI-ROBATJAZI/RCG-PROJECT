import React from 'react';

import Button from '../button';

function ButtonStop({
  isOn,
  setIsOn
}){
  return(
    <Button
      text={isOn?"Stop":"Start"}
      bgColor={isOn?"red":"green"}
      textColor='white'
      onClick={() => {
        setIsOn(!isOn)
      }}
    />
  )
}

export default ButtonStop;
