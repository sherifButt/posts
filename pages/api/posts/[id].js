import articles from '../../../data';

export default (req, res) => {
   const filtered = articles.filter(article => article.id === req.query.id);
   if (filtered.length > 0) {

      res.status(200).json(filtered[0]);
   } else if (req.query.id >= articles.length) {
      res.status(404).json({
         success: false,
         msg: `your requested article number #${req.query.id} max number of articles is #${articles.length}, request less article value`,
      });
   } else {
      res.status(404).json({
         success: false,
      });
   }
};
