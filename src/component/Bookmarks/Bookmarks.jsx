import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 ml-4 mt-2 ">
            <div className='border border-[#6047EC] rounded bg-gray-300'>
                <h3 className="text-2xl font-medium text-center p-2 text-[#6047EC]">Spent time on read : 177 min </h3>
            </div>
            <div className='mt-2 pb-2 bg-gray-300 rounded'>
                <h2 className="text-xl font-bold px-4 py-2">Bookmarked Blogs: </h2>
                {
                    // bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
                <Bookmark />
            </div>
        </div>
    )
}

export default Bookmarks