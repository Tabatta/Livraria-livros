module.exports = (router) => {
   router.get('/', (req, res) => {
      res.json({msg: 'API RESTFul Livros by:Tabatta', version: '1.0.0'});
   });
}