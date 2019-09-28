class Github{
    constructor (){
        this.url = "https://api.github.com/users/";
    }
    
    async getUserData (username){
    
         //console.log(url);
        const userJson  = await fetch(this.url+username);
        const repoJson = await fetch(this.url+username+"/repos");

        const dataUser = await userJson.json();
        const dataRepo = await repoJson.json();
        // console.log(dataUser);
        // console.log(dataRepo);
        
        
        return {
            repo:dataRepo,
            user:dataUser

        }
    }
}