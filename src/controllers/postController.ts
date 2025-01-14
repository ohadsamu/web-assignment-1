import Post from "../models/post";

export const createPost = async (req: any, res: any) => {
  const { title, content, senderID } = req.body;
  const post = new Post({
    title,
    content,
    senderID
  });
  await post.save();
  res.status(201).json(post);
};

export const getPosts = async (req: any, res: any) => {
  const posts = await Post.find();
  
  res.json(posts);
};

export const getPostById = async (req: any, res: any) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({ message: "Post not found" });

  res.json(post);
};

export const updatePost = async (req: any, res: any) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({ message: "Post not found" });

  const { title, content, senderID } = req.body;
  post.title = title || post.title;
  post.content = content || post.content;
  post.senderID = senderID || post.senderID;
  await post.save();
  res.json(post);
};

export const deletePost = async (req: any, res: any) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({ message: "Post not found" });
  await Post.deleteOne({ _id: req.params.id });
  res.json({ message: "Post deleted" });
};


export const getPostBySender = async (req: any, res: any) => {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    await Post.deleteOne({ _id: req.params.id });
    res.json({ message: "Post deleted" });
  };