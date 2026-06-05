const mongoose=require("mongoose");

const reservationSchema=new mongoose.Schema({

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    restaurantId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Restaurant"
    },

    reservationDate:Date,

    reservationTime:String,

    guests:Number,

    status:{
        type:String,
        default:"Pending"
    }

});

module.exports=
mongoose.model("Reservation",reservationSchema);