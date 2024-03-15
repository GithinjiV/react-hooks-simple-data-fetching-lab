import React, { useEffect, useState } from "react"



function App(){
    const [dogImage, setDogImage]= useState(null)
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(res=>res.json())

            .then(data=>{
                setDogImage(data.message) 
            })
    }, [])
    if(!dogImage)return(<p>Loading....</p>)
    return <img src={dogImage} Alt="A Random Dog"/>
}

export default App