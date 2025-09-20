const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const ToDoSchema = require("../Schemas/TodoSchema");
const Todo = new mongoose.model("Todo",ToDoSchema)
// Get All the ToDo
router.get("/", async (req, res) => {});
// Get a ToDo
router.get("/:id", async (req, res) => {});
// Post a ToDo
router.post("/", async (req, res) => {
    const newTodo=new Todo(req.body);
    await newTodo.save((err =>{
        if(err){
            res.status(500).json({
                error: "there was a server side error"
            });
        } else{
                 res.status(200).json({
                message: "Todo was a inserted successfully!"
            });
            }
    }))
});
// Post multiple ToDo
router.post("/all", async (req, res) => {});
// Put ToDo
router.put("/:id", async (req, res) => {});
// Delete ToDo
router.delete("/:id", async (req, res) => {});
module.exports = router;
