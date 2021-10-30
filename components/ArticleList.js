import ArticleItem from "./ArticleItem";

const ArticleList = ({ articles }) => {
  return (
    <>
      {articles?.map((article) => {
        return (
          <>
            <ArticleItem article={article} />
          </>
        );
      })}
    </>
  );
};
export default ArticleList;
