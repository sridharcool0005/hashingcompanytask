let express = require('express'),
  multer = require('multer'),
  mongoose = require('mongoose'),
  router = express.Router();

// Multer File upload settings
const DIR = './public/';
const fs = require("fs")



const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, fileName)
  }
});

// Multer Mime Type Validation
var upload = multer({
  storage: storage,
  // limits: {
  //   fileSize: 1024 * 1024 * 5
  // },
  // fileFilter: (req, file, cb) => {
  //   if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" || file.mimetype == 'applcation/pdf') {
  //     cb(null, true);
  //   } else {
  //     cb(null, false);
  //     return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
  //   }
  // }
});


// netflix model
let netflixmodel = require('../models/netflixmodel');
const crypto = require("crypto");


// POST User
router.post('/addnewmovie', upload.single('avatar'), (req, res, next) => {
  if(!req.file||!req.body.category_name||!req.body.title){
    res.status(400).send({ success: false, message:'invalid input details missing' })
  }else{


  const url = req.protocol + '://' + req.get('host')
  let mid = crypto.randomBytes(6).toString("hex");

  const newmovie = new netflixmodel({
    mid: mid,
    category: {
      category_name: req.body.category,
      title: req.body.title,
      image_url: url + '/' + req.file.filename
    }
  });
  newmovie.save().then(result => {
    console.log(result);
    res.status(201).json({
      message: "movie added successfully!",
      result
    })
  }).catch(err => {
    console.log(err),
      res.status(500).json({
        error: err
      });
  })
}
})

// GET All Users
// router.get("/getmoviesbycategory", (req, res, next) => {

//   netflixmodel.aggregate([
//     {
//       $group: {
//         _id: "$_id",
//         details: {

//           $push: {
//             category:"$category.category_name",
//             title: "$category.title",
//             image_url: "$category.image_url",
//           }
//         }
//       }
//     }
//   ])
//     .then(response => {
//       res.status(200).send(response);
//     });
// });






router.get("/getmoviesbycategory", (req, res, next) => {

  netflixmodel.aggregate([
        { "$group": {
           "_id": {
              "category": "$category.category_name",
           },
           "title": {
              "$addToSet": "$category.title"
           },

           "image_url": {
            "$addToSet": "$category.image_url"
         }
        }},
     ]).then(response => {
      res.status(200).send(response);
    });
});






module.exports = router;
