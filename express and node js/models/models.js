var mongoose= require('mongoose');

var userSchema = new mongoose.Schema({
	username: String,
	password: String, //hash created from password
	created_at: {type: Date, default: Date.now}
});

var postSchema= new mongoose.Schema({
text: String,
username: {type: Date, default: Date.now},
created_by: String,

})


mongoose.model("User", userSchema);
mongoose.model("Post", postSchema);