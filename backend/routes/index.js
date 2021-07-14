var express = require("express");
const blog = require("../models/blogSchema");
var router = express.Router();

/* GET home page. */
router.post("/post", async (req, res) => {
  try {
    console.log("try from post");
    const addBlog = new blog(req.body);
    console.log(req.body);
    const insert = await addBlog.save();
    res.status(201).send(insert);
  } catch (error) {
    console.log("try", error);
    res.status(400).send(error);
  }
});

router.get("/posts", async (req, res) => {
  try {
    const getPosts = await blog.find({});
    res.send(getPosts);
    console.log(getPosts);
  } catch (error) {
    res.status(400).send(error);
  }
});

//We will handle by Id
router.get("/post/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getPost = await blog.findById({ _id });
    res.send(getPost);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.patch("/post/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getUpdatePost = await blog.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getUpdatePost);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/post/:id", async (req, res) => {
  try {
    const deletePost = await blog.findByIdAndDelete(req.params.id);
    res.send(deletePost);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
