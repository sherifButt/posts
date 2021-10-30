import articles from '../../../data'

export default (req, res) => {
   if (req.query.pages) console.log('hi')
   console.log(req.query);
   res.status(200).json(articles)
}