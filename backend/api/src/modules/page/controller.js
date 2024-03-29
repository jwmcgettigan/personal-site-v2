import Page from './model';

const createPage = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a page.',
    });
  }

  const page = new Page(body);

  if (!page) {
    return res.status(400).json({ success: false, error: err });
  }

  page
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: page._id,
        message: 'Page created!',
      })
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'Page not created!',
      })
    });
};

const updatePage = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a body to update',
    });
  }

  Page.findOne({ _id: req.params.id }, (err, page) => {
    if (err) {
      return res.status(404).json({
        err,
        message: 'Page not found!',
      });
    }
    //page.name = body.name;
    //page.time = body.time;
    //page.rating = body.rating;
    page.path = body.path;
    page.title = body.title;
    page.body = body.body;
    page.style = body.style;
    page.categories = body.categories;
    page.tags = body.tags;
    page
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: page._id,
          message: 'Page updated!',
        })
      })
      .catch(error => {
        return res.status(404).json({
          error,
          message: 'Page not updated!',
        })
      });
  });
};

const deletePage = async (req, res) => {
  await Page.findOneAndDelete({ _id: req.params.id }, (err, page) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!page) {
      return res
        .status(404)
        .json({ success: false, error: `Page not found` });
    }

    return res.status(200).json({ success: true, data: page });
  }).catch(err => console.log(err));
};

const getPageById = async (req, res) => {
  await Page.findOne({ _id: req.params.id }, (err, page) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!page) {
      return res
        .status(404)
        .json({ success: false, error: `Page not found` });
    }
    return res.status(200).json({ success: true, data: page });
  }).catch(err => console.log(err));
};

const getPages = async (req, res) => {
  await Page.find({}, (err, pages) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!pages.length) {
      return res
        .status(404)
        .json({ success: false, error: `Page not found` });
    }
    return res.status(200).json({ success: true, data: pages });
  }).catch(err => console.log(err));
};

export default {
  createPage,
  updatePage,
  deletePage,
  getPages,
  getPageById,
}