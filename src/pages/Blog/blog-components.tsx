type Title = {
    title: string
}

const BlogTitle: React.FC<Title> = ({ title }) => {
    return (
        <button className="font-bold border-b-2 text-lg hover:border-neutral-600 inline-block font-inter">
        {title}
      </button>
    );
  };
  
  export default BlogTitle;