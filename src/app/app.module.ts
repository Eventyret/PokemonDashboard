import { PokemonDataService } from "./services/data.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { SidebarComponent } from "./shared/components/sidebar/sidebar.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { PokemonListComponent } from "./pages/pokemon-list/pokemon-list.component";
import { Routes } from "@angular/router";
import { ChartsModule } from "ng2-charts";
import { BarChartComponent } from "./pages/dashboard/components/bar-chart/bar-chart.component";
import { PieChartComponent } from "./pages/dashboard/components/pie-chart/pie-chart.component";
import { BattleStatusComponent } from "./pages/battle-page/battle-status.component";
import { BattlesComponent } from "./pages/battle-page/components/battles/battles.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DataTableModule } from "angular2-datatable";
import { FilterPipeModule } from "ngx-filter-pipe";
import { HttpClientModule } from "@angular/common/http";
import { NgxSpinnerModule } from "ngx-spinner";
import { ListHelpComponent } from "./pages/pokemon-list/components/modals/list-help/list-help.component";
import { BattleHelpComponent } from "./pages/battle-page/components/modals/battle-help/battle-help.component";
import { PokemonTypesComponent } from "./pages/dashboard/components/modals/pokemon-types/pokemon-types.component";
import { AvgAttributesComponent } from "./pages/dashboard/components/modals/avg-attributes/avg-attributes.component";

export const appRoutes: Routes = [
	{ path: "", component: DashboardComponent },
	{ path: "list", component: PokemonListComponent },
	{ path: "help/types", component: PokemonTypesComponent },
	{ path: "help/avg", component: AvgAttributesComponent },
	{ path: "help/list", component: ListHelpComponent },
	{ path: "help/battle", component: BattleHelpComponent },
	{ path: "battle", component: BattleStatusComponent },
	{ path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		SidebarComponent,
		DashboardComponent,
		PokemonListComponent,
		BarChartComponent,
		PieChartComponent,
		BattleStatusComponent,
		BattlesComponent,
		PokemonTypesComponent,
		AvgAttributesComponent,
		ListHelpComponent,
		BattleHelpComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(appRoutes),
		ChartsModule,
		HttpClientModule,
		DataTableModule,
		FormsModule,
		FilterPipeModule,
		NgbModule.forRoot(),
		NgxSpinnerModule
	],
	providers: [PokemonDataService],
	bootstrap: [AppComponent]
})
export class AppModule {}
