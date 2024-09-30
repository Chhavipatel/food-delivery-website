import mongoose from 'mongoose';
const orderSchema=new mongoose.Schema({
    userid:{
        type:String,
        required:true

    },
    items:{
        type:Array,
        required:true

    },
    amount:{
        type:Number,
        required:true

    },
    address:{
        type:Object,
        required:true

    },
    status:{
        type:String,
        default:"food processing"

    },
    date:{
        type:Date,
        default:Date.now()

    },
    payment:{
        type:Boolean,
        default:false

    },
})

const ordermodel=mongoose.models.order || mongoose.model("order",orderSchema);


export default ordermodel;