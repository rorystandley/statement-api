import { Application } from 'express';
import { LoggingService } from "./services/logging.service";

export class Controller {

	private _loggingService: LoggingService;

	constructor( private app: Application ) {
		this._loggingService = new LoggingService();
		this.routes();
	}

	public routes() {
		this.app.route( '/joinx/:tenant/:namespace/:uuid' )
			.get( this._loggingService.getLogs )
			.post( this._loggingService.addNewLog )
			.delete( this._loggingService.deleteLogs );
	}
}
