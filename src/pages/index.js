import { useEffect, useState } from 'react'

export default function Home() {
  const [data, setData] = useState({})

  useEffect(() => {
    const fetchDataFunction = async () => {
      const res = await fetch(`https://dummyjson.com/products`)
      const jsonData = await res.json()
      setData(jsonData)
    }

    fetchDataFunction()
  }, [])
  console.log(data)

  return (
    <>
      {/* <h1>{data.name}</h1>
      <h3>{data.text}</h3> */}
    </>
  )
}
