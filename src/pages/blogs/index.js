import React, {useState} from 'react'
import './blogs.scss'
import BlogItem from './BlogItem'

const mockPosts = [
    {
        id: 1,
        title: 'Introduction',
        body: 't. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.',
        author: 'Ermyas',
        tags: ['sport', 'life style', 'fun'],
        image: 'https://source.unsplash.com/user/erondu/1600x900',
        date: 'oct 22, 2019'
    },
    {
        id: 2,
        title: 'Greetings',
        body: ' The point of using Lorem Ipsum is that it has a more-or-less normal',
        author: 'Ermyas',
        tags: ['sport', 'life style', 'fun'],
        image: 'https://source.unsplash.com/user/eron/1600x900',
        date: 'oct 15, 2019'
    },
    {
        id: 3,
        title: 'Action',
        body: ' The point of using Lorem Ipsum is that it has a more-or-less normal',
        author: 'Bereket',
        tags: ['sport', 'coffee', 'faffy'],
        image: 'https://source.unsplash.com/user/ero/1600x900',
        date: 'oct 15, 2019'
    },

]

 const Index = () => {
     const [posts, setPosts] = useState(mockPosts);

    return (
        <div className="blog">
            <div className="blog-lists">
                {
                    posts.map(post => (
                        <BlogItem key={post.id} post={post}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Index