

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


  const initialVideoId = localStorage.getItem("initialVideoId")
  if(initialVideoId != null){
    savedConfig.initialVideoId = initialVideoId
    console.log(savedConfig.initialVideoId)
  }else{
    savedConfig.initialVideoId = "bUaHbs09sOo"
  }


  return savedConfig

}

const savedConfig = loadFromLocalStorage()

export {savedConfig}
