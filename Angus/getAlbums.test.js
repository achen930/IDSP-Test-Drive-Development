const getAlbums = require('./getAlbums')

test("return false given no user id", () => {
    expect(getAlbums()).toBe(false);
})

test("return false if given an empty string", () => {
    expect(getAlbums("")).toBe(false);
})

test("return array of albums from database if given a valid user id", () => {
    expect(getAlbums(1)).toHaveLength(1)
    expect(getAlbums("1")).toHaveLength(1)
    expect(getAlbums(1)).toStrictEqual([{
        albumId: 1,
        albumName: "first album",
        albumParticipants: [1, 3],
        albumPosts: [1]
    }])
    expect(getAlbums(3)).toHaveLength(2)
    expect(getAlbums("3")).toHaveLength(2)
    expect(getAlbums(3)).toStrictEqual([{
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
    }])

    expect(getAlbums(2)).toHaveLength(1)
    expect(getAlbums("2")).toHaveLength(1)
    expect(getAlbums(2)).toStrictEqual([{
        albumId: 2,
        albumName: "second album",
        albumParticipants: [2, 3],
        albumPosts: [2]
    }])
})

test("return empty array from database if given a valid user id that has no albums", () => {
    expect(getAlbums(4)).toHaveLength(0)
    expect(getAlbums("4")).toHaveLength(0)
    expect(getAlbums(4)).toStrictEqual([])
})

test("return false if given a invalid user id", () => {
    expect(getAlbums(5)).toBe(false);
    expect(getAlbums("5")).toBe(false);
    expect(getAlbums("s")).toBe(false);
    expect(getAlbums("sfsfsfs")).toBe(false);
})
