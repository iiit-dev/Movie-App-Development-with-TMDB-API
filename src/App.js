import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Movies from './Components/Movies'
import Banner from './Components/Banner'
import WatchList from './Components/WatchList'

const App = () => {
  let [watchList, setWatchList] = useState([]);
  const addTitle = (movieObj) => {
    let newWatchList = [...watchList, movieObj]
    setWatchList(newWatchList)
    localStorage.setItem('moviesApp', JSON.stringify(newWatchList))
    console.log('add title')
    console.log(watchList)
  }
  const removeTitle = (movieObj) => {
    let updatedWatchList = watchList.filter((title) => title.id !== movieObj.id);
    setWatchList(updatedWatchList)
    console.log('remove title')
    console.log(watchList)
  }
  useEffect(() => {
    let localStorageMovies = localStorage.getItem('moviesApp')
    if (!localStorageMovies) { return }
    setWatchList(JSON.parse(localStorageMovies))
  },[])
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/WatchList' element={<WatchList setWatchList={setWatchList} watchList={watchList} removeTitle={removeTitle} />} />
          <Route path='/' element={<><Banner /> <Movies addTitle={addTitle} removeTitle={removeTitle} watchList={watchList} /> </>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
