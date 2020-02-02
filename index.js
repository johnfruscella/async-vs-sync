console.log('Before');
//getUser(1, getRepositories);
getUser(1)
.then(user => getRepositories(user.gitHubUsername))
.then(repos => getCommits(repos[0]))
.then(commits => console.log('Commits', commits))
.catch(err => console.log('Error', err.message));
console.log('After');

// Callbacks are functions that will be called when the result of an asynchronos operation is ready.
// Promises hold the eventual result of an asynchronous operation
// Async/await

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
        }, 2000);
    });

};

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log('Calling the GITHUB API...');
            resolve(['commit']);
        }, 2000);
    });
};