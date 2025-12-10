import BlogContent from "@/components/blog/blogContent";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return <BlogContent slug={params.slug} />;
}
