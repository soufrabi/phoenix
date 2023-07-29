

const loadConfig = () => {


  const savedConfig = {}

  const playerWidthValTemp = localStorage.getItem("playerWidthVal")
  if (playerWidthValTemp != null && playerWidthValTemp < 2000 && playerWidthValTemp > 200) {
    savedConfig.playerWidthVal = parseInt(playerWidthValTemp)
    console.log(savedConfig.playerWidthVal)
  } else {
    savedConfig.playerWidthVal = 700
  }

  savedConfig.playerWidth = String(savedConfig.playerWidthVal) + "px"


  const initialVideoId = localStorage.getItem("initialVideoId")
  if (initialVideoId != null) {
    savedConfig.initialVideoId = initialVideoId
    console.log(savedConfig.initialVideoId)
  } else {
    savedConfig.initialVideoId = "bUaHbs09sOo"
  }


  return savedConfig

}

const loadHistory = () => {
  const storedObject = JSON.parse(localStorage.getItem("myObject"));
  console.log(storedObject); // { name: "John", age: 30, isMarried: true }


}


const saveHistory = () => {

  const myObject = { name: "John", age: 30, isMarried: true };
  localStorage.setItem("myObject", JSON.stringify(myObject));

}

const savedConfig = loadConfig()

export { savedConfig }
