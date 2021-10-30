import Link from "next/link";
import { Col, Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

const ArticleItem = ({ article }) => {
  return (
    <Col sm="6" className="mb-3">
      <Card className="bg-warning shadow">
        <Link href="/article/[id]" as={`/article/${article.id}`}>
          <a className="text-decoration-none">
            <CardBody>
              <CardTitle
                className="text-uppercase text-left font-weight-bolder text-dark"
                tag="h4"
              >
                {article?.title} &rarr;
              </CardTitle>
              <CardText className="text-muted text-sm-left font-weight-light text-dark">
                {article?.body}
              </CardText>
            </CardBody>
          </a>
        </Link>
      </Card>
    </Col>
  );
};

export default ArticleItem;
