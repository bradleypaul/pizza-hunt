const { Pizza } = require('../models');

const pizzaController = {

  getAll(req, res) {
    Pizza.find({})
    .then(dbPizzaData => res.json(dbPizzaData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
  },

  getById({ params }, res) {
    Pizza.findOne({ _id: params.id})
    .then(dbPizzaData => {
      if(!dbPizzaData) {
        res.status(404).json({
          message: 'No pizza found with this id!'
        })
        return;
      }
      res.json(dbPizzaData);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
  },

  create({ body }, res) {
    Pizza.create(body)
    .then(dbPizzaData => res.json(dbPizzaData))
    .catch(err => res.status(400).json(err));
  },

  update({ params, body }, res) {
    Pizza.findOneAndUpdate({ _id: params.id}, body, {new: true})
    .then(dbPizzaData => {
      if(!dbPizzaData) {
        if(!dbPizzaData) {
          res.status(404).json({message: 'No pizza found with this id!'});
          return;
        }
        res.json(dbPizzaData);
      }
    })
    .catch(err => res.status(400).json(err));
  },

  remove({ params }, res) {
    Pizza.findOneAndDelete({ _id: params.id })
    .then(dbPizzaData => {
      if(!dbPizzaData) {
        res.status(404).json({
          message: 'No pizza found with that id!'
        });
        return;
      }
      res.json(dbPizzaData);
    })
    .catch(err => res.status(400).json(err));
  }

};

module.exports = pizzaController;