//AJAX promise which posts to users index for signup
export const signup = user => {
    return $.ajax({
        method: 'POST',
        url: '/api/users',
        data: { user }
    })
}

//AJAX promise which posts to session for logging in
export const login = user => {
    return $.ajax({
        method: 'POST',
        url: '/api/session',
        data: { user }
    })
}

//AJAX promise which deletes to session for logging out
export const logout = () => {
    return $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
}

//AJAX promise which gets to users to fetch all users
export const getUsers = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/users'
    })
}

//AJAX promise which gets a user's email
export const getEmail = email => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/email?email=${email}`
    })
}