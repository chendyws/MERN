import React from 'react'
import { RegisterBg } from '../../../assets/image'
import { Button, Gap } from '../../atoms'
import './blogitem.scss'
import { useHistory } from 'react-router-dom'

function BlogItem () {
    const history = useHistory();
    return (
        <div className="blog-item">
            <img className="image-thumb" src={RegisterBg} alt="post" />
            <div className="content-detail">
                <p className="title">TitleBlog</p>
                <p className="author">Author - Date post</p>
                <p className="body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.   </p>
                <Gap height={20} />
                <Button title="View Detail" onClick={() => history.push('/detail-blog')} />
            </div>
        </div>
    )
}

export default BlogItem 
