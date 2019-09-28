import { Request, Response } from "express";
import { WELCOME_MESSAGE } from "../constants/statement.constants";
import { Statement } from "../models/statement.model";
import { MongooseDocument } from "mongoose";

export class StatementService {
	public welcomeMessage( req: Request, res: Response ) {
		return res.status( 200 ).send( WELCOME_MESSAGE );
	}

	//Getting data from the db
	public getAllStatements( req: Request, res: Response ) {
		Statement.find( {}, ( error: Error, spending: MongooseDocument ) => {
			if ( error ) {
				res.send( error );
			}
			res.json( spending );
		} );
	}

	public addNewStatement( req: Request, res: Response ) {
		const newStatement = new Statement( req.body );
		newStatement.save( ( error: Error, pokemon: MongooseDocument ) => {
			if ( error ) {
				res.send( error );
			}
			res.json( pokemon );
		} );
	}

	public deleteStatement(req: Request, res: Response) {
		const statementId = req.params.id;
		Statement.findByIdAndDelete(statementId, (error: Error, deleted: any) => {
			if (error) {
				res.send(error);
			}
			const message = deleted ? 'Deleted successfully' : 'Statement not found :(';
			res.send(message);
		});
	}

	public updateStatement(req: Request, res: Response) {
		const statementId = req.params.id;
		Statement.findByIdAndUpdate(
			statementId,
			req.body,
			(error: Error, pokemon: any) => {
				if (error) {
					res.send(error);
				}
				const message = pokemon
					? 'Updated successfully'
					: 'Statement not found :(';
				res.send(message);
			}
		);
	}
}
