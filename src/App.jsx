import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = (blog) => {
      const newBookmarks = [...bookmarks, blog];
      setBookmarks(newBookmarks);
  }



  const [readTime, setReadTime] = useState(0);

  const handleMarkAsRead = (id, time) => {
    const newReadTime = readTime + time ;
    setReadTime(newReadTime);
    //remove item from bookmarks when Mark as read
    const remainBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainBookmarks);

  }

  return (
    <>

      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readTime={readTime}></Bookmarks>
      </div>

    </>
  )
}

export default App
