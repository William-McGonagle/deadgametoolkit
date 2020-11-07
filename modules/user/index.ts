class User {

    id = -1;
    username = "";
    publicData = {};
    privateData = {};
    email = "";

    static async getUser(id) {

        var user = new User();

        // Returns a user object, or null if the user doesn't exist.
        return user;

    }
    
    static async login(username, password) {
    
        
    
    }
    
    static async signup(username, password, email) {
    
        
    
    }
    
    static async verifyAuth(token) {
    
        
    
    }

    async setUsername(id, username) {



    }
    
    async setPassword(id, password) {
    
    
    
    }
    
    async setPrivateData(id, data) {
    
    
    
    }
    
    async setPublicData(id, data) {
    
    
    
    }
    
    async getPrivateData(id, data) {
    
    
    
    }
    
    async getPublicData(id, data) {
    
    
    
    }

}

module.exports = User;