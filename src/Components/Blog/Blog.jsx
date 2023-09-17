import PropTypes from 'prop-types';
import { BsBookmarkCheckFill } from 'react-icons/bs';

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    console.log(blog);
    const {id , cover, title, author, authorImg, postedDate, readingTime, hashtags} = blog;
    return (
        <div className='p-3 mb-16'>
            <img className='w-full' src={cover} alt={`this image is cover of ${title}`} />
            <div className='flex justify-between mt-5'>
                <div className='flex'>
                    <img className='w-14 rounded-full' src={authorImg} alt="author-image" />
                    <div className='ml-5'>
                        <h5 className='text-lg font-bold'>{author}</h5>
                        <p className='text-sm text-neutral-500'>{postedDate}</p>
                    </div>
                </div>
                <div>
                    <span className='text-neutral-500'>{readingTime} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-2xl text-blue-700'><BsBookmarkCheckFill></BsBookmarkCheckFill></button>
                </div>

            </div>
            <h2 className='mt-5 mb-5 text-2xl font-bold'>{title}</h2>
            {
                hashtags.map((hash, idx) => <span key={idx} className='mr-3'><a className='underline text-blue-500 text-sm' href="#">#{hash}</a></span>)
            }
                <br />
            <button onClick={() => handleMarkAsRead(id, readingTime)} className='ml-1 mt-7 py-2 px-3 bg-slate-300 rounded-lg text-sm font'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired ,
    handleAddToBookmark: PropTypes.func.isRequired ,
    handleMarkAsRead: PropTypes.func.isRequired
}

export default Blog;