import express from 'express';

import controller from './controller';

const router = express.Router()

router.post('/page', controller.createPage)
router.put('/page/:id', controller.updatePage)
router.delete('/page/:id', controller.deletePage)
router.get('/page/:id', controller.getPageById)
router.get('/pages', controller.getPages)

export default router;