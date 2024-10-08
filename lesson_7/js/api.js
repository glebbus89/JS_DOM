export async function fetchRepos(username){
    const response = await fetch(`https://api.github.com/users/${username}/repos`) 
    if(!response.ok) {
        throw new Error(`Пользователь ${username} не найден`);
    }
    return response.json();
}