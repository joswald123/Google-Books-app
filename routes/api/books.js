const router = require("express").Router();
const booksController = require("../../controllers/bookController");


// Api/book
router.route9("/")
    .get(booksController.findAll)
    .post(booksController.create);


// Api/books/:id
router.route9("/:id")
    .get(booksController.findById)
    .pu(booksController.update)
    .delete(booksController.remove);

module.exports = router;

