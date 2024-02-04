import posts from "./data.js"

const postsSection = document.getElementById('posts-section');

function render() {
    const htmlString = posts.map(post => {
        return `
            <section class='post' id='post'>
                <div class='post-heading'>
                    <img
                        src=${post.avatar} 
                        class='post-author-avatar'
                    >
                    <div class='post-author-info'>
                        <p class='post-author-name'>
                            ${post.name}
                        </p>
                        <p class='post-author-location'>
                            ${post.location}
                        </p>
                    </div>
                </div>
                <img
                    src='${post.postImage}' 
                    class='post-img'
                    data-likes='${post.id}'
                >
                <div class='post-reactions'>
                    <img
                        src='./images/icon-heart.png'
                        class='post-icons heart-icon'
                        data-likes='${post.id}'
                    >
                    <img 
                        src='./images/icon-comment.png' 
                        class='post-icons'
                    >
                    <img 
                        src='./images/icon-dm.png' 
                        class='post-icons'
                    > 
                </div>
                <p class='post-likes'>
                    ${post.likes} likes
                </p>
                <p class='post-caption'>
                    <span class='post-author-username'>
                        ${post.username}
                    </span>
                    ${post.comment}
                </p>
            </section>
            `
    }).join('');
   
    postsSection.innerHTML = htmlString;
    
    addListener('heart-icon', 'click');
    addListener('post-img', 'dblclick');
};

function addListener(className, clickType) {
    const elementCollection = document.getElementsByClassName(className);
    if (clickType === 'click') {
        for (let element of elementCollection) {
            element.onclick = handleLikes;
        }
    } else if (clickType === 'dblclick') {
        for (let element of elementCollection) {
            element.ondblclick = handleLikes;
        }
    }    
}

function handleLikes(e) {
    if (e.target.dataset.likes) {
        const postId = e.target.dataset.likes;

        const targetPost = posts.filter(post => {
        return postId === post.id;
        })[0];

        !targetPost.isLiked ? targetPost.likes++ : targetPost.likes--;
        targetPost.isLiked = !targetPost.isLiked;
        render();
    }
};

render();


