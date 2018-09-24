const selectPost = (state, id) => {
    return state.posts.posts.find(post => post.id === id);
};

const selectPosts = (state) => state.posts.posts;

const selectPostsPage = (state) => state.posts.page;

const selectAddPostStatus = (state) => state.posts.status.addPost;

const selectEditPostStatus = (state) => state.posts.status.editPost;

const selectRemovePostStatus = (state) => state.posts.status.deletePost;

const selectToggleLikeStatus = (state) => state.posts.status.toggleLike;

const selectFetchPostsStatus = (state) => state.posts.status.fetchPosts;

const selectSelectedPage = state => state.posts.selectedPage;

const selectPageCount = state => 10;

export {
    selectPost,
    selectPosts,
    selectAddPostStatus,
    selectEditPostStatus,
    selectRemovePostStatus,
    selectToggleLikeStatus,
    selectFetchPostsStatus,
    selectPostsPage,
    selectSelectedPage,
    selectPageCount
};
