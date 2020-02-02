console.log('Before');
//getUser(1, getRepositories);

//Promise-based approach
// getUser(1)
//     .then(user => getRepositories(user.gitHubUsername))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => console.log('Commits', commits))
//     .catch(err => console.log('Error', err.message));

// Async and Await approach  Uses Try/Catch instead of just catch for errors
async function displayCommits() {
    try{
    const user = await getUser(1);
    const repos = getRepositories(user.gitHubUsername);
    const commits = await getCommits(repos[0]);
    console.log(commits);
} catch (err) {
    console.log('Error', err.message);
}  
};
displayCommits();

console.log('After');

// Callbacks are functions that will be called when the result of an asynchronos operation is ready.
// Promises hold the eventual result of an asynchronous operation
// Async/await helps write asynchronous code like synchonos code. It is built on top of promises.

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Reading user ${id} from a database...`);
            resolve({ id: id, gitHubUsername: 'jim' });
        }, 2000);
    });

};

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            resolve(['repo1', 'repo2', 'repo3']);
           // reject(new Error("Could not get the repositories"));
        }, 2000);
    });

};

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling the GITHUB API...');
            resolve(['commit']);
        }, 2000);
    });
};