var mongoose   = require("mongoose");
var Campground = require("./models/campgrounds");
var Comment    = require("./models/comment");

var data= [
    {
        name: "Cloud's Rest", 
        image: "http://photosforclass.com/download/7626464792",
        description: "blah blah blah"
    },
    {
        name: "Sun's Floor", 
        image: "https://farm9.staticflickr.com/8167/7121865553_e1c6a31f07.jpg",
        description: "blah blah blah"
    },
    {
        name: "Snow Peak", 
        image: "https://farm4.staticflickr.com/3270/2617191414_c5d8a25a94.jpg",
        description: "blah blah blah"
    }
];

function seedDB(){
    Campground.remove({}, function(err){
    //     if(err){
    //         console.log(err);
    //     } else {
    //         console.log("removed campgrounds!"); 
    //         // add a few campgrounds
    //         data.forEach(function(seed){
    //         Campground.create(seed, function(err, campground){
    //         if (err){
    //             console.log(err);
    //         } else {
    //             console.log("added a campground");
    //             Comment.create(
    //                 {
    //                     text: "This place is great, but I wish there was internet",
    //                     author: "Homer"
    //                 }, function(err, comment){
    //                     if(err){
    //                         console.log(err);
    //                     } else {
    //                         campground.comments.push(comment);
    //                         campground.save();
    //                         console.log("Created a new comment");
    //                     }
    //                 });
    //         }
    //     });
    // });
    //     }
    });
   
    // add a few comments
}

module.exports = seedDB;