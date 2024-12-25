const mongoose=require("mongoose")
const notesSchema=new mongoose.Schema({
    title:String,
    body:String,
    noteSImage:{
        type:String,
        default:"https://scooboo.in/cdn/shop/products/kalp-notes-pb-notebooknotebooks-notepadskalpscooboo-kpb008695896127860-740685.jpg?v=1678431493&width=1214"
    },
    userId:{
        type:String,
        required:true
    }
},{
    versionKey:false,
    timestamps:true
}
)

const notesModel=mongoose.model("notes",notesSchema)

module.exports=notesModel