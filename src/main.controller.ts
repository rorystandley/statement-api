import { Application } from 'express';
import { StatementService } from "./services/statement.service";

export class Controller {

	private _statementService: StatementService;

	constructor( private app: Application ) {
		this._statementService = new StatementService();
		this.routes();
	}

	public routes() {
		this.app.route( '/' ).get( this._statementService.welcomeMessage );
		this.app.route( '/statements' ).get( this._statementService.getAllStatements );
		this.app.route( '/statement' ).post( this._statementService.addNewStatement );
		this.app.route( '/statement/:id' )
			.delete( this._statementService.deleteStatement )
			.put( this._statementService.updateStatement );
	}
}
