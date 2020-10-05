// variabel UI
const userInput = document.getElementById('searchUser');
const http = new Github;
const ui = new UI;


// event listener
userInput.addEventListener('keyup',e => {
    const userText = e.target.value;
    console.log(userText);
    if(userText !== ''){
        http.getUser(userText).then(data => {
            if(data.profile.message === 'Not Found'){
                ui.showAlert('User not found', 'alert alert-danger');
            } else {
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
                console.log(data.repos)
            }
        })
        .catch(err => console.log(err));
    }
    else {
        ui.clearProfile();
    }
})