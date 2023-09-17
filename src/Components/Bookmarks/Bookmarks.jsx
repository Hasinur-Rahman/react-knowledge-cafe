import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readTime }) => {
    return (
        <div className="md:w-1/3 bg-gray-300 mt-12 rounded-md pt-3 md:pt-0">
            <div className='bg-purple-100 rounded-md py-4 px-4 m-2'>
                <h3 className='text-center text-xl md:text-base lg:text-xl text-purple-700'>Spend Time on Read : {readTime} min</h3>
            </div>
            <div className='mt-2 rounded-md'>
                <h2 className='text-center text-2xl font-medium py-2'>Bookmarked Blogs : {bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readTime: PropTypes.number.isRequired
}
export default Bookmarks;