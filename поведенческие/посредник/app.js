class Admin {
    constructor(chat, name) {
        this.chat = chat;
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    sendMessage(message) {
        this.chat.sendMessage(message, this);
    }
    getMessage(message) {
        console.log(this.name + ' получает сообщение' + message);
    }
}
class UserItem {
    constructor(chat, name) {
        this.chat = chat;
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    sendMessage(message) {
        this.chat.sendMessage(message, this);
    }
    getMessage(message) {
        console.log(this.name + ' получает сообщение' + message);
    }
}
class SimpleTextChat {
    constructor() {
        this.users = [];
    }
    setAdmin(admin) {
        this.admin = admin;
    }
    addUser(user) {
        this.users.push(user);
    }
    sendMessage(message, user) {
        for (let u of this.users) {
            if (u != user) {
                u.getMessage(message);
            }
        }
        this.admin.getMessage(message);
    }
}
let chat = new SimpleTextChat();
let admin = new Admin(chat, 'Admin');
let user1 = new UserItem(chat, 'User1');
let user2 = new UserItem(chat, 'User2');
chat.setAdmin(admin);
chat.addUser(user1);
chat.addUser(user2);
user1.sendMessage('Привет, я первый пользователь');
admin.sendMessage('Привет, я администратор этого чата');
