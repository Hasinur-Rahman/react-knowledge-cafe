import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleAddToBookmark, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=> {
        fetch('Blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[]);
    console.log(blogs);
    return (
        <div className="md:w-2/3">
            <h2 className="text-4xl ml-3">Blogs: {blogs.length}</h2>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blog>)
            }
        </div>
    );
};


Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func.isRequired ,
    handleMarkAsRead: PropTypes.func.isRequired
}

export default Blogs;