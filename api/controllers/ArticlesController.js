/**
 * ArticlesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  list: (req, res) => {
   //res.view('pages/articles/list');
   Articles.find({}).exec((err, articles) => {
      if (err) {
        res.send(500, {error: 'Sorry! There was a database error'});
      }
      res.view('pages/articles/list', {articles: articles});
   })
  },
  add: (req, res) => { 
       res.view('pages/articles/add')
  },
  create: (req, res) => {
    let title = req.body.title;
    let body = req.body.body;
    Articles.create({title:title, body: body}).exec((err) => {
      if (err) {
        res.send(500, {error: "Could not create article. Database error"})
      }
      res.redirect('/articles/list');
    });
  }
};

