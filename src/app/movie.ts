export class Movie {
  constructor(
    public id : number,
    public poster : string,
    public title : string,
    public directors : string[],
    public actors : string[],
    public genres : string[],
    public synopsis ?: string
  ){}
}
