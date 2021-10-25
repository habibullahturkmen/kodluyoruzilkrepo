const posts = [
    {name: 'post 1', content: 'HTML'},
    {name: 'post 2', content: 'CSS'},
    {name: 'post 3', content: 'JavaScript'}
];

const listPosts = () => {
    posts.map(post => {
        console.log(post.name + " " + post.content);
    })
};

const addPost = (newPost) => {
    const promise1 = new Promise((resolve, reject) => {
        posts.push(newPost);
        resolve(posts);
        //reject("Hata Olustu");
    });

    return promise1;
}

async function showPosts() {
    try {
        await addPost({name: 'post 4', content: 'Java'});
        listPosts();
    } catch (error) {
        console.log(error);
    }
}

showPosts();