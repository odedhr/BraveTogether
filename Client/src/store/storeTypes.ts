export type Category={
    name:string;
    img?:string;
}
export type Entities = {
    categories:Category[]
}
export type Store ={
    entities:Entities
}