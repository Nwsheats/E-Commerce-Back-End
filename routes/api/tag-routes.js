const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/api/tags', async (req, res) => {
  try {
    const tags = await Tag.find();
    res.status(200).json(tags);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }});

router.get('/', async (req, res) => {
  // find all tags
      try {
        const tags = await Tag.findAll();
        res.status(200).json(tags);
      } catch (err) {
        console.error(err);
        res.status(400).json(err);
      }
    });
  // be sure to include its associated Product data

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
    const tag = await Tag.findById(req.params.id);
    res.status(200).json(tag);
    } catch (err) {
      console.error(err);
      res.status(400).json(err);
  }
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  try {
    const tag = await Tag.create(req.body);
    res.status(200).json(tag);
    } catch (err) {
      console.error(err);
      res.status(400).json(err);
  }
  // create a new tag
  Tag.create(req.body)
   .then(tag => {
    res.status(200).json(tag);
})
  .then((newTag) => res.status(200).json(newTag))
  .catch((err) => {
    console.error(err);
    res.status(400).json(err);
  });
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tag = await Tag.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(tag);
    } catch (err) {
      console.error(err);
      res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tag = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!tag) {
      res.status(404).json({ message: 'Tag not found' });
      return;
    }
    res.status(200).json({ message: 'Tag deleted' });
    } catch (err) {
      console.error(err);
      res.status(400).json(err);
    }
});

module.exports = router;
