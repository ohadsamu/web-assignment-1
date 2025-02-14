import Comment from '../models/comment';

export const getComments = async (req: any, res: any) => {
  const comments = await Comment.find();
  
  res.json(comments);
};

export const createComment = async (req: any, res: any) => {
  const { content, post } = req.body;
  const comment = new Comment({
    content,
    post
  });
  await comment.save();
  res.status(201).json(comment);
};

export const getCommentById = async (req: any, res: any) => {
  const comment = await Comment.findById(req.params.id);
  if (!comment) return res.status(404).json({ message: "Comment not found" });

  res.json(comment);
};


export const deleteComment = async (req: any, res: any) => {
  const comment = await Comment.findById(req.params.id);
  if (!comment) return res.status(404).json({ message: "Comment not found" });
  await Comment.deleteOne({ _id: req.params.id });
  res.json({ message: "Comment Deleted" });
};


export const updateComment = async (req: any, res: any) => {
  const comment = await Comment.findById(req.params.id);
  if (!comment) return res.status(404).json({ message: "Comment not found" });

  const { content } = req.body;
  comment.content = content || comment.content;
  await comment.save();
  res.json(comment);
};

