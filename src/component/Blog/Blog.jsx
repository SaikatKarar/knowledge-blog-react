import React from 'react'
import Card from '../Card/Card'
import BlogsData from './blogs.json';
import Bookmarks from '../Bookmarks/Bookmarks';

function Blog() {
    return (
        <div className='flex'>
            <div>
                {BlogsData.map((e, index) => (
                    <Card key={index} blog={e} />
                ))}
            </div>
            <Bookmarks></Bookmarks>
        </div>
    )
}

export default Blog