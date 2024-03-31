const db = { 
    users: [{
        id: 1,
        profilePicture: "",
        email: "a@a.com",
        username: "a",
        password: ""
    },
    {
        id: 2,
        profilePicture: "",
        email: "b@b.com",
        username: "b",
        password: ""
    },
    {
        id: 3,
        profilePicture: "",
        email: "c@c.com",
        username: "c",
        password: ""
    },
    {
        id: 4,
        profilePicture: "",
        email: "d@d.com",
        username: "d",
        password: ""
    }],
    albums: [{
        albumId: 1,
        albumName: "first album",
        albumParticipants: [1, 3],
        albumPosts: [1]
    },
    {
        albumId: 2,
        albumName: "second album",
        albumParticipants: [2, 3],
        albumPosts: [2]
    }],
    posts: [{
        postId: "1",
        userId: "1",
        postPicture: "", 
        content: "a message",
        likes: 0,
        comments: 0,
        commentList:[]
    },
    {
        postId: "2",
        userId: "2",
        postPicture: "", 
        content: "second message",
        likes: 0,
        comments: 0,
        commentList:[]
    }]
}
exports.db = db;