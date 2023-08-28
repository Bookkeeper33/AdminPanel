import { Component, OnInit } from "@angular/core";
import { ChartOptions } from "chart.js";
import { DataService } from "../../data.service";

@Component({
    selector: "app-chart",
    templateUrl: "./chart.component.html",
    styleUrls: ["./chart.component.css"],
})
export class ChartComponent implements OnInit {
    chartData: any[] | undefined;
    chartOption: ChartOptions<any> | undefined;

    constructor(private dataService: DataService) {}

    ngOnInit(): void {
        this.chartData = this.dataService.getChartData();
        this.chartOption = this.dataService.getChartOption();
    }
}
