// Script for main

// dichiaro un array
const allUsers = [];
const maxTotalUsers = parseInt(prompt("Select a maximun users number!"));
let totalUsers = 0;
const pageId = document.getElementById("maxUsers");
pageId.append(maxTotalUsers);

alert(`Maximum total users number is set to ${maxTotalUsers}`);

while(totalUsers < maxTotalUsers){
    let newUserNum = parseInt(prompt("Add some users Man, is empty here!"));
    totalUsers += newUserNum;

    if (totalUsers == maxTotalUsers){
        alert(`
                Maximum number of ${maxTotalUsers} users has been reached!
                GoodBye!
            `);
    } else if (totalUsers <= maxTotalUsers){
        allUsers.push(newUserNum);
        alert(`There are new a total of ${totalUsers} users!`);
    } else {
        let tooManyUsers = totalUsers;
        alert(` 
                There are now ${tooManyUsers} users, they are too many!
                Only max ${maxTotalUsers} are allowed.
                Last allowed number is ${totalUsers - newUserNum}
            `);
    }
    
    
}




