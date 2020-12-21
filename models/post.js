import mongoose from 'mongoose'
 const { Schema } = mongoose

const postShema = new Schema({
 title: String,
 body: String
});

export const Post = mongoose.model('Post', postShema)

