const changeStatus = ({status, fetchPosts, addPost, editPost, removePost, toggleLike}) => {
    fetchPosts = fetchPosts === undefined ? status.fetchPosts : fetchPosts;
    addPost = addPost === undefined ? status.addPost : addPost;
    editPost = editPost === undefined ? status.editPost : editPost;
    removePost = removePost === undefined ? status.deletePost : removePost;
    toggleLike = toggleLike === undefined ? status.toggleLike : toggleLike;
    return {fetchPosts, addPost, editPost, removePost: deletePost, toggleLike};
};

export {
    changeStatus
};
