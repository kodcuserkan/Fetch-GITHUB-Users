const username = document.getElementById("githubname");
const githubForm = document.getElementById("github-form");
const lastSearched = document.getElementById("last-users");
const clearAll = document.getElementById("clear-last-users");
const github = new Github();
const uiElement = new UI();

eventListeners ();

function eventListeners () {
    githubForm.addEventListener("submit",getData);
    document.addEventListener("DOMContentLoaded", getSearchedUsernames);
    clearAll.addEventListener("click",clearFunction);
}
function getData(e) {
    let username1 = username.value.trim();

    if (username1 ==="") {
        uiElement.showError("Lütfen önce bir kullanıcı adı girin");
        
    } else {
        github.getUserData(username1)
        .then(x=>{
            if (x.user.message === "Not Found") {
                uiElement.showError("Aradığınız kullanıcı bulunamadı...");
            } else {
                Strg.addUsersToStorage(username1);
                uiElement.addLastUsersToUI();
                uiElement.userInfo(x.user);
                // console.log(x);
                // console.log(x.user.company);
                // x.repo.forEach(r => {
                //     console.log(r);
                    
                // });
                uiElement.userRepo(x.repo);
                
            }
        })
        .catch(err=>uiElement.showError(err));
    }
    
    uiElement.clearTexts();
    e.preventDefault();
}
function clearFunction(e) {

    if (confirm("Tüm arama kayıtları silinecek. Emin misiniz?")) {
        uiElement.clearAllSearcedFromUI();
        Strg.clearAllUsersFromStorage();
    
    }
}
function getSearchedUsernames(e) {
    uiElement.addLastUsersToUI();
}
