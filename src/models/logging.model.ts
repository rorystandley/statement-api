import mongoose from "mongoose";

const LogSchema = new mongoose.Schema( {
	uuid: String,
	tenant: String,
	namespace: String,
	message: String,
	additional: Array,
	level: Number,
	timestamp: String,
	fileName: String,
	lineNumber: String
} );

//Creating our model
export const Log = mongoose.model( "Log", LogSchema );
