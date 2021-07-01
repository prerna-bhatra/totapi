const mongoose=require("mongoose");

const questionSchema=new mongoose.Schema({
	name:
	{
		type:String,
		require:true
	},
    email:
    {
        type:String,
		require:true
    },
    phone:
    {
        type:String,
		require:true
    },
    query:
    {
        type:String,
    }
},
{
	timestamps:true
}
);
module.exports=mongoose.model('question',questionSchema);




