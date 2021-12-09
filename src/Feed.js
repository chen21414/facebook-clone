import React, {useState, useEffect} from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import db from './firebase';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        db.collection('posts').orderBy('timestamp','desc').onSnapshot((snapshot) => 
            setPosts(snapshot.docs.map((doc) => ({id:doc.id, data:doc.data() })))
        );
    },[]);

    return (
        <div className='feed'>
            <StoryReel/>
            <MessageSender/>
            {posts.map((post)=>(
                <Post
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />
            ))}

            {/* <Post
                profilePic={'https://static.straitstimes.com.sg/s3fs-public/styles/article_pictrure_780x520_/public/articles/2020/01/19/yq-edi-19012020.jpg?itok=ZH0Aut9P&timestamp=1579425665'}
                message={'wow this works'}
                timestamp={'timestamp'}
                username={'Mike Chen'}
                image={'https://www.unilad.co.uk/cdn-cgi/image/width=648,quality=70,format=webp,fit=pad,dpr=1/https%3A%2F%2Fwww.unilad.co.uk%2Fwp-content%2Fuploads%2F2020%2F08%2FInstagram-Suggested-Posts.jpg'}
            />

                <Post
                profilePic={'https://static.straitstimes.com.sg/s3fs-public/styles/article_pictrure_780x520_/public/articles/2020/01/19/yq-edi-19012020.jpg?itok=ZH0Aut9P&timestamp=1579425665'}
                message={'wow this works'}
                timestamp={'timestamp'}
                username={'Mike Chen'}
                image={'https://www.unilad.co.uk/cdn-cgi/image/width=648,quality=70,format=webp,fit=pad,dpr=1/https%3A%2F%2Fwww.unilad.co.uk%2Fwp-content%2Fuploads%2F2020%2F08%2FInstagram-Suggested-Posts.jpg'}
            />

                <Post
                profilePic={'https://static.straitstimes.com.sg/s3fs-public/styles/article_pictrure_780x520_/public/articles/2020/01/19/yq-edi-19012020.jpg?itok=ZH0Aut9P&timestamp=1579425665'}
                message={'wow this works'}
                timestamp={'timestamp'}
                username={'Mike Chen'}
                image={'https://www.unilad.co.uk/cdn-cgi/image/width=648,quality=70,format=webp,fit=pad,dpr=1/https%3A%2F%2Fwww.unilad.co.uk%2Fwp-content%2Fuploads%2F2020%2F08%2FInstagram-Suggested-Posts.jpg'}
            /> */}

        </div>
    )
}

export default Feed
