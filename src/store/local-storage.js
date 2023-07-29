

const loadFromLocalStorage = ()=>{


  const savedConfig = {}

  const playerWidthValTemp = localStorage.getItem("playerWidthVal")
  if(playerWidthValTemp != null && playerWidthValTemp<2000 && playerWidthValTemp >200){
    savedConfig.playerWidthVal = parseInt(playerWidthValTemp)
    console.log(savedConfig.playerWidthVal)
  }else{
    savedConfig.playerWidthVal = 700
  }

  savedConfig.playerWidth= String(savedConfig.playerWidthVal) + "px"

  return savedConfig

}

const savedConfig = loadFromLocalStorage()

export {savedConfig}
