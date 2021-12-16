abstract class Page {
   public showPage():void{
      console.log('Header..')
      this.content()
      console.log('Footer..');
   }
   public content():void{}
}

class Main extends Page{
   public content(): void {
      console.log('Welcome..');
   }
}

class News  extends Page{
   public content(): void {
      console.log('News...');
   }
}

let main:Main = new Main()
let news:News = new News()

main.showPage()
console.log('==================');
news.showPage()