import { PokemonDataService } from "./../../services/data.service";
import { Component, OnInit } from "@angular/core";
import { Pokemons } from "../../components/shared/pokemons";
import * as _ from "lodash";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
	selector: "app-pokemon-list",
	templateUrl: "./pokemon-list.component.html",
	styleUrls: ["./pokemon-list.component.scss"]
})
export class PokemonListComponent implements OnInit {
	constructor(private pokemonService: PokemonDataService, private spinner: NgxSpinnerService) {}

	public data: any[];
	public battleing;
	public sortBy = "Name";
	public sortOrder = "asc";
	public rowsOnPage = 25;
	public filterQuery = "";

	ngOnInit() {
		this.spinner.show();
		this.populateTable();
	}

	populateTable(): void {
		const localStorageCheck = localStorage.getItem("pokemons");
		if (localStorageCheck) {
			this.data.push(localStorage.getItem("pokemons"));
			this.spinner.hide();
		} else {
			this.pokemonService.getPokemons().subscribe(
				pokemon => {
					this.data = pokemon.results;
				},
				error => {
					console.log(error);
				},
				() => {
					this.spinner.hide();
				}
			);
		}
	}
}
