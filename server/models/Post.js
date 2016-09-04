import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const postSchema = new Schema({
  cuid: { type: 'String', required: true },
  title: { type: 'String', required: true },
  description: { type: 'String', required: true },
  content: { type: 'String', required: true },
  slug: { type: 'String', required: true },
  publishDate: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Post', postSchema);
