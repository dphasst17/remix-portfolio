import { user_data } from "~/data/user"
export const getProject = async () => {
    return fetch(`https://api.github.com/search/repositories?q=user:${user_data.gitUser}+fork:false&sort=stars&per_page=20&type=Repositories`)
        .then(res => res.json())
}
export const getLanguage = async () => {
    return fetch(`https://api.github.com/users/${user_data.gitUser}`)
        .then(res => res.json())
}