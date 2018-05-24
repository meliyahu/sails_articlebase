/**
 * ArticlesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  list: function(req, res){
   res.view('pages/articles/list');
  },
  add: function(req, res){
       res.view('pages/articles/add')
  }
};

