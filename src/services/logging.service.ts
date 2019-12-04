import { Request, Response } from "express";
import { Log } from "../models/logging.model";
import { MongooseDocument } from "mongoose";

export class LoggingService {

	public getLogs( req: Request, res: Response ) {
		Log.find( { uuid: req.params.uuid }, ( error: Error, result: MongooseDocument ) => {
			if ( error ) {
				res.send( error );
			}
			res.json( result );
		} );
	}

	public addNewLog( req: Request, res: Response ) {
		req.body.uuid = req.params.uuid;
		req.body.tenant = req.params.tenant;
		req.body.namespace = req.params.namespace;
		const newLog = new Log( req.body );
		newLog.save( ( error: Error, result: MongooseDocument ) => {
			if ( error ) {
				res.send( error );
			}
			res.json( result );
		} );
	}

	public deleteLogs( req: Request, res: Response ) {
		Log.deleteMany( { uuid: req.params.uuid }, ( error: Error ) => {
			if ( error ) {
				res.send( error );
			}
			res.send();
		} );
	}
}
