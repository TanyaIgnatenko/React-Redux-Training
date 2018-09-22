const selectPost = (state, id) => {
    return state.posts.posts.find(post => post.id === id);
};

const selectPosts = (state) => state.posts.posts;

export {
    selectPost,
    selectPosts
};
