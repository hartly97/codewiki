export class Mcomment{
  constructor(
    public main:Comment,
    public replies // this is the array for storing all replies 
  ){};
}

export class Comment{
  constructor(
    public text:string,
    public user: User,  // object {name, email}
    public upvotes, // number
    public date:string // string for piping later
  ){}
}

export class User {
  id: string;
  name: string;
  avatar: string;
  email: string;
}
