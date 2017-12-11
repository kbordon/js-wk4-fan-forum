export class Post {
  public timestamp:string;
  public editing: boolean = false;
  constructor(public title:string, public author:string, public image:string, public content:string, public type: string){
    this.timestamp = new Date().toLocaleString();
  }
}
