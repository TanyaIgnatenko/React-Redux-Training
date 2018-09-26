const changeStatus = ({status, fetchPosts, fetchPost, addPost, editPost, deletePost, toggleLike}) => {
    fetchPosts = fetchPosts === undefined ? status.fetchPosts : fetchPosts;
    fetchPost = fetchPost === undefined ? status.fetchPost : fetchPost;
    addPost = addPost === undefined ? status.addPost : addPost;
    editPost = editPost === undefined ? status.editPost : editPost;
    deletePost = deletePost === undefined ? status.deletePost : deletePost;
    toggleLike = toggleLike === undefined ? status.toggleLike : toggleLike;
    return {fetchPosts, fetchPost, addPost, editPost, deletePost, toggleLike};
};

export {
    changeStatus
};
