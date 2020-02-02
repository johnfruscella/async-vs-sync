
const p = new Promise((resolve, reject) => {
   // kick off some async work Promise starts initially in "pending" state
  setTimeout(() => {
    //resolve(1); //if this returns, operation goes from pending to resoved (aka fulfilled)
     reject(new Error('message')); // if it fails, operation goes from pending to rejected
  }, 2000);
   
  
});

p
.then(result => console.log('Result', result))
.catch(err => console.log('Your Error', err.message));


//anywhere there's an asynchonous function that takes a callback, we should modify that function to returna a promise.