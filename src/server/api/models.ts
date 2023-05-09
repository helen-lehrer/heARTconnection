import { ObjectId } from "mongodb";

export default class Post {
  constructor(public name: string, public id?: ObjectId) {}
}