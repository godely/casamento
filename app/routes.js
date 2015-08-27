var Gift = require('./models/gift');
const PASS = 'guitha';

module.exports = function(app) {

  app.get('/api/gift/add', function(req, res) {
    var gift = req.query;
    if (gift.password != PASS) {
      return res.json({msg: "Senha inválida!"});
    }
    var gift = new Gift({
      name: gift.name,
      value: gift.value,
      url: gift.url,
      code: gift.code,
      category: gift.category
    });
    gift.save(function(err, obj) {
      return res.json({msg: "Presente adicionado!", obj: obj});
    });
  });

  app.get('/api/gift/get', function(req, res) {
    Gift.find().exec().then(function(gifts) {
      return res.json({gifts: gifts});
    });
  });

  app.get('/api/gift/remove', function(req, res) {
    if (req.query.password != PASS) {
      return res.json({msg: 'Senha inválida!', err: true});
    }
    var id = req.query.id;
    Gift.remove({_id: id}, function() {
      return res.json({msg: 'Presente removido!'});
    });
  });

  app.get('/api/gift/edit', function(req, res) {
    var query = req.query;
    if (query.password != PASS) {
      return res.json({msg: "Senha inválida!"});
    }
    Gift.findById(query._id).exec().then(function(gift) {
      gift.name = query.name;
      gift.value = query.value;
      gift.url = query.url;
      gift.code = query.code;
      gift.category = query.category;
      gift.bought = query.bought;
      gift.save(function() {
        return res.json({msg: "Presente editado!"});
      });
    });
  });

  app.get('/admin_123', function(req, res) {
    res.sendfile('./public/admin.html');
  });

	// route to handle all angular requests
	app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
  });

};
