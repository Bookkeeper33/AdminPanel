import { Injectable } from "@angular/core";
import { ChartOptions } from "chart.js";

@Injectable({
    providedIn: "root",
})
export class DataService {
    chartsData = [
        {
            type: "pie",
            title: "New Users",
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero aperiam in, nesciunt earum est dolores exercitationem fuga esse consequuntur corporis animi vitae iusto laboriosam illo aut voluptatum, voluptatibus odio expedita.",
            labels: ["New visits", "New signs up", "Unauthorized Users"],
            chartWidth: 250,
            datasets: [
                {
                    data: [50.55, 20.2, 30.3],
                    backgroundColor: [
                        "rgb(255, 99, 132)",
                        "rgb(54, 162, 235)",
                        "rgb(255, 205, 86)",
                    ],
                    hoverOffset: 4,
                },
            ],
        },
        {
            type: "line",
            title: "User activity",
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero aperiam in, nesciunt earum est dolores exercitationem fuga esse consequuntur corporis animi vitae iusto laboriosam illo aut voluptatum, voluptatibus odio expedita.",
            chartWidth: 500,
            labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
            ],
            datasets: [
                {
                    data: [65, 59, 80, 81, 56, 55, 40],
                    label: "Series A",
                    fill: true,
                    tension: 0.5,
                    borderColor: "black",
                    backgroundColor: "rgba(255,0,0,0.3)",
                },
            ],
        },
    ];
   
    chartOptions: ChartOptions<any> = {
        responsive: true,
    };

    constructor() {}

    getChartData() {
        return this.chartsData;
    }

    getChartOption() {
        return this.chartOptions;
    }
}
