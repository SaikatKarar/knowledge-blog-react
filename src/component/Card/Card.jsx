function Card({ blog }) {
    const { id, title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='w-5/6 mb-20 space-y-4'>
            <img src={cover} alt="" />
            <div>
                <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <img className="w-14" src={author_img} alt="" />
                        <div>
                            <h2 className='text-xl font-bold'>{author}</h2>
                            <p>{posted_date}</p>
                        </div>
                    </div>
                    <div>
                        <p>0{reading_time} min read</p>
                    </div>
                </div>
                <h1 className="text-2xl font-bold mt-4">{title}</h1>
                <p className="my-3">
                    {
                        hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a> </span>)
                    }
                </p>
                <button
                    className='text-purple-800 font-bold underline'
                >Mark As Read</button>
            </div>
        </div>
    );
}

export default Card;
