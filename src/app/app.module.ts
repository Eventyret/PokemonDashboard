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

export const appRoutes: Routes = [
	{ path: "", component: DashboardComponent },
	{ path: "list", component: PokemonListComponent },
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
		BattlesComponent
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