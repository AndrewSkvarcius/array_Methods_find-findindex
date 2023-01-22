function findUserByUsername(arr, username) {
    return arr.find(function(user) {
        return user.username === username;
    })
}
function removeUser(arr, username) {
    let fdIndex = arr.findIndex(function(user){
        return user.username === username;
    })
    if(fdIndex === -1)return;

    return arr.splice(fdIndex,1)[0];

}