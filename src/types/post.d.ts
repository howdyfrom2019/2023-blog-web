interface PostCreatePayload {
  title: string;
  category: Category.List;
  content: string;
}

declare namespace Post {
  type CreatePayload = PostCreatePayload;
}
