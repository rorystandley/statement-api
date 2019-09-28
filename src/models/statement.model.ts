import mongoose from "mongoose";

const StatementSchema = new mongoose.Schema( {
	month: String,
	year: String,
	transactions: [
		{
			description: String,
			category: String,
			amount: String,
			owner: String
		}
	]
} );

//Creating our model
export const Statement = mongoose.model( "Statement", StatementSchema );
