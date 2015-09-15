var Gift = require('./models/gift');
var Depo = require('./models/depo');
var RSVP = require('./models/rsvp');
var Buyer = require('./models/buyer');

var ObjectId = require('mongoose').Types.ObjectId;

const PASS = 'guitha';

module.exports = function(app) {

  app.get('/api/gift/add', function(req, res) {
    var gift = req.query;
    if (gift.password != PASS) {
      return res.json({msg: "Senha inválida!", err: true});
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
      return res.json({msg: "Senha inválida!", err: true});
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

  app.get('/api/rsvp/add', function(req, res) {
    var query = req.query;
    var rsvp = new RSVP(query);
    rsvp.save(function() {
      return res.json({msg: "Confirmação enviada para Thaís e Guilherme!"});
    });
  });

  app.get('/api/rsvp/get', function(req, res) {
    RSVP.find().exec().then(function(rsvps) {
      return res.json({rsvps: rsvps});
    });
  });

  app.get('/api/rsvp/delete', function(req, res) {
    var id = req.query.id;
    RSVP.remove({_id: id}, function() {
      return res.json({});
    });
  });

  app.get('/api/depo/add', function(req, res) {
    var query = req.query;
    var depo = new Depo(query);
    depo.save(function(err, depo) {
      return res.json({msg: "Depoimento enviado para Thaís e Guilherme! Eles vão dar uma olhadinha e deve aparecer aqui no site logo logo :)"});
    });
  });

  app.get('/api/depo/get/all', function(req, res) {
    Depo.find().exec().then(function(depos) {
      return res.json({depos: depos});
    });
  });

  app.get('/api/depo/get/active', function(req, res) {
    Depo.find({active: true}).exec().then(function(depos) {
      return res.json({depos: depos});
    });
  });

  app.get('/api/depo/update', function(req, res) {
    var id = req.query.id;
    var active = req.query.active;
    Depo.update({_id: id}, {active: active}, {}, function(a,b) {
      return res.json({});
    });
  });

  app.get('/api/depo/delete', function(req, res) {
    var id = req.query.id;
    Depo.remove({_id: id}, function() {
      return res.json({});
    });
  });

  app.get('/api/buyer/add', function(req, res) {
    var query = req.query;
    var buyer = new Buyer({
      name: query.name,
      message: query.message,
      gift: new ObjectId(query.gift)
    });
    buyer.save(function(err, obj) {
      return res.json({});
    });
  });

  app.get('/api/buyer/get', function(req, res) {
    Buyer.find().exec().then(function(buyers) {
      return res.json({buyers: buyers});
    });
  });

  app.get('/api/buyer/delete', function(req, res) {
    var id = req.query.id;
    Buyer.remove({_id: id}, function() {
      return res.json({});
    });
  });

  app.get('/admin_900412', function(req, res) {
    res.sendfile('./public/admin.html');
  });

	// route to handle all angular requests
	app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
  });

};
