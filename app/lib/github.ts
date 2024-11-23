export const fetchGitHubData = async (token: string) => {
    const res = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ query: "{ viewer { name bio } }" }),
    });
    return res.json();
};
