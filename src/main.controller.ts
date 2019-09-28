import { Application } from 'express';
import { SpendingService } from "./services/spending.service";

export class Controller {

	private _spendingService: SpendingService;

	constructor( private app: Application ) {
		this._spendingService = new SpendingService();
		this.routes();
	}

	public routes() {
		this.app.route( '/' ).get( this._spendingService.welcomeMessage );
	}
}
