class Strg {

    static getAllUsersFromStorage(){

        let users;

        if (JSON.parse(localStorage.getItem("users")) === null) {
            users =[];
        } else {
            users = JSON.parse(localStorage.getItem("users"));
        }

        return users;

    }

    static addUsersToStorage(username){
        let users = this.getAllUsersFromStorage();

        if (users.indexOf(username) === -1) {
            users.push (username);
            localStorage.setItem("users",JSON.stringify(users));
        } 

    }

    static clearAllUsersFromStorage(){
        localStorage.removeItem("users");
    }


}