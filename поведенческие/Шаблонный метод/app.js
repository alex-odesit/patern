class Page {
    showPage() {
        console.log('Header..');
        this.content();
        console.log('Footer..');
    }
    content() { }
}
class Main extends Page {
    content() {
        console.log('Welcome..');
    }
}
class News extends Page {
    content() {
        console.log('News...');
    }
}
let main = new Main();
let news = new News();
main.showPage();
console.log('==================');
news.showPage();
