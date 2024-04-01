const { db } = require('./mockdb')

const getAlbums = (userId) => {
    if (typeof userId !== "number"){
        userId = Number(userId);
    }
    const user = db.users.filter((user) => user.id === userId).pop()
    if (user) {
        return db.albums.filter((album) => album.albumParticipants.includes(user.id))
    }
    return false;
}
module.exports = getAlbums;