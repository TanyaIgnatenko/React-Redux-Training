const changeStatus = ({status, fetchPosts, addPost, editPost, deletePost, toggleLike}) => {
    fetchPosts = fetchPosts === undefined ? status.fetchPosts : fetchPosts;
    addPost = addPost === undefined ? status.addPost : addPost;
    editPost = editPost === undefined ? status.editPost : editPost;
    deletePost = deletePost === undefined ? status.deletePost : deletePost;
    toggleLike = toggleLike === undefined ? status.toggleLike : toggleLike;
    return {fetchPosts, addPost, editPost, deletePost, toggleLike};
};

export {
    changeStatus
};
