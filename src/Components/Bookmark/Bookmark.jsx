import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {id, title} = bookmark;
    return (
        <div>
            <h2 className='p-4 bg-slate-400 rounded-md m-2 text-xl md:text-base lg:text-xl font-normal' key={id}>{title}</h2>
        </div>
    );
};


Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}
export default Bookmark;