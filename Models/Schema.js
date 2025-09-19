const mongoose = require('moongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        Required:true,
        Purpose:'Product’s display name'
    },

    category:{
        type:String,
        Required:true,
        Enum:['electronics', 'fashion', 'home', 'books'],
        Purpose:'Product classification'
    },


    price:{
        type:Number,
        Required:true,
        Minimum:1,
        Purpose: 'Price of the product in INR'
    },

    inStock:{
        type: Boolean,
        Default: true,
        Purpose: 'Availability of the product'
    },

    releaseDate:{
        type: Date 
    },

    reviews:{
        type: mongoose.Schema.Types.ObjectId,
        Ref: 'Review',
        Purpose: 'List of reviews received for this product'
    },

    reviewerName:{
        type: String,
        Required: true,
        Purpose: 'Name of the reviewer'
    },

    rating:{
    type: Number,
    Required: true,
    Min: 1,
    Max: 5,
    Purpose: 'Rating score given to the product'
    },

    comment:{
        type: String
    },

    createdAt:{
    type:  Date,
    Default: 'current date',
    Purpose: 'Time of review submission'
    },

    product:{
    type: mongoose.Schema.Types.ObjectId,
    Ref: 'Product',
    Required: true,
    Purpose: 'The product being reviewed'
    }


});