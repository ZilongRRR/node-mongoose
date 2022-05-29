const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '作者需要填寫'],
  },
  content: {
    type: String,
    required: [true, '內容需要填寫'],
  },
  createAt: {
    type: Date,
    default: Date.now,
    select: false, // find 的時候不會顯示出來，保護資料
  },
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
