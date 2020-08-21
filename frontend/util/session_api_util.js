//AJAX promise which posts to users index for signup
export const signup = user => {
    return $.ajax({
        method: 'POST',
        url: '/api/users',
        data: { user }
    })
}