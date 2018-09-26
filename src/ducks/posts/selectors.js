const selectSelectedPost = state => state.posts.selectedPost;

const selectPosts = state => state.posts.posts;

const selectPostsPage = state => state.posts.page;

const selectAddPostStatus = state => state.posts.status.addPost;

const selectEditPostStatus = state => state.posts.status.editPost;

const selectRemovePostStatus = state => state.posts.status.deletePost;

const selectToggleLikeStatus = state => state.posts.status.toggleLike;

const selectFetchPostsStatus = state => state.posts.status.fetchPosts;

const selectFetchPostStatus = state => state.posts.status.fetchPost;

const selectSelectedPage = state => state.posts.selectedPage;

const selectPageCount = state => state.posts.pageCount;

export {
    selectSelectedPost,
    selectPosts,
    selectAddPostStatus,
    selectEditPostStatus,
    selectRemovePostStatus,
    selectToggleLikeStatus,
    selectFetchPostsStatus,
    selectFetchPostStatus,
    selectPostsPage,
    selectSelectedPage,
    selectPageCount
};
