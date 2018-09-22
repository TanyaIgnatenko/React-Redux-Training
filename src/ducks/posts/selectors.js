const selectPost = (state, id) => {
    return state.posts.posts.find(post => post.id === id);
};

const selectPosts = (state) => state.posts.posts;

const selectAddPostStatus = (state) => state.posts.status.addPost;

const selectEditPostStatus = (state) => state.posts.status.editPost;

const selectRemovePostStatus = (state) => state.posts.status.removePost;

const selectToggleLikeStatus = (state) => state.posts.status.toggleLike;

const selectFetchPostsStatus = (state) => state.posts.status.fetchPosts;

export {
    selectPost,
    selectPosts,
    selectAddPostStatus,
    selectEditPostStatus,
    selectRemovePostStatus,
    selectToggleLikeStatus,
    selectFetchPostsStatus
};
