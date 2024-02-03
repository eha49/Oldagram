import posts from "./data.js"

const postsSection = document.getElementById('posts-section');

const htmlString =
    `
    <section class='post'>
        <div class='post-heading'>
            <img src=${posts[0].avatar} class='post-author-avatar'>
            <div class='post-author-info'>
                <p class='post-author-name'>${posts[0].name}</p>
                <p class='post-author-location'>${posts[0].location}</p>
            </div>
        </div>
        <img src='${posts[0].post}' class='post-img'>
        <div class='post-reactions'>
            <img src='./images/icon-heart.png' class='post-icons heart-icon'>
            <img src='./images/icon-comment.png' class='post-icons'>
            <img src='./images/icon-dm.png' class='post-icons'> 
        </div>
        <p class='post-likes'>${posts[0].likes} likes</p>
        <p class='post-caption'><span class='post-author-username'>${posts[0].username}</span> ${posts[0].comment}</p>
    </section>
    `

    postsSection.innerHTML = htmlString
