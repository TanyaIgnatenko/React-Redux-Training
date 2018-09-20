const POST_START_ID = 100;
let posts = JSON.parse(localStorage.getItem('posts')) || [];
let tempPosts = JSON.parse(localStorage.getItem('tempPosts')) || [];
let nextPostId = getInitialNextPostId();

function fetchPosts() {
    return posts;
}

function fetchPost(id) {
    return posts.find(post => post.id === id);
}

function addPost(post) {
    post.id = getNextPostId();
    posts.push(post);
    storePosts(posts);
}

function replacePost(id, post) {
    const postIdx = getPostIdx(id);
    if (postIdx === -1) {
        addPost(post);
    } else {
        posts.splice(postIdx, 1, post);
        storePosts(posts);
    }
}

function removePost(id) {
    const postIdx = getPostIdx(id);
    if (postIdx === -1) {
        return;
    }

    posts.splice(postIdx, 1);
    storePosts(posts);
}

function fetchTempPost(id) {
    return tempPosts.find(post => post.id === id);
}

function addTempPost(post) {
    tempPosts.push(post);
    storeTempPosts(tempPosts);
}

function deleteTempPost(id) {
    const postIdx = getTempPostIdx(id);
    if (postIdx === -1) {
        return;
    }

    tempPosts.splice(postIdx, 1);
    storeTempPosts(tempPosts);
}

function deleteTempPosts() {
    tempPosts.length = 0;
    storeTempPosts(tempPosts);
}

function getPostIdx(id) {
    return posts.findIndex(post => post.id === id);
}

function getLastPostId() {
    return posts.length === 0 ? -1 : posts[posts.length - 1].id;
}

function getInitialNextPostId() {
    const lastPostId = getLastPostId();
    return lastPostId === -1 ? POST_START_ID : lastPostId + 1;
}

function getNextPostId() {
    return nextPostId++;
}

function storePosts(posts) {
    localStorage.setItem('posts', JSON.stringify(posts));
}

function getTempPostIdx(id) {
    return tempPosts.findIndex(post => post.id === id);
}

function storeTempPosts(posts) {
    localStorage.setItem('tempPosts', JSON.stringify(tempPosts));
}

export default {
    fetchPosts,
    fetchPost,
    addPost,
    replacePost,
    removePost,
    fetchTempPost,
    addTempPost,
    deleteTempPost,
    deleteTempPosts
};
