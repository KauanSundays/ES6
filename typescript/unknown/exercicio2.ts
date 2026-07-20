interface GitHubUser {
    login: string,
    name: string | null,
    avatar_url: string,
    public_repos: number,
    followers: number
}

interface GitHubError {
    message: string
}

function isGitHubUser(data: unknown): data is GitHubUser {
    if (typeof data !== 'object' || data === null) return false;

    const p = data as Record<string, any>;
    console.log(typeof p.login === 'string');
    
    return (
        typeof p.login === 'string' &&
        typeof p.avatar_url === 'string' &&
        typeof p.public_repos === 'number'
    );
    
}

async function fetchGitHubUser(username: string): Promise<unknown> {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data: unknown = await response.json();
  console.log(data)
  return data;
}

async function executar() {
    const github = 'KauanSundays';
    const response = await fetchGitHubUser(github);
    if (isGitHubUser(response)) {
        console.log("é um usuario de github")
    } else {
        console.log(2)
    }
}

executar