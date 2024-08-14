import { Component, OnInit } from '@angular/core';

declare var InnocallsRTC: any; 

@Component({
  selector: 'app-inno-calls',
  standalone: true,
  templateUrl: './inno-calls.component.html',
  styleUrls: ['./inno-calls.component.css']
})
export class InnoCallsComponent implements OnInit {
  innocallsRTC: any;


  ngOnInit() {
      this.initializeInnoCallsRTC();
  }

  initializeInnoCallsRTC() {
    this.innocallsRTC = new InnocallsRTC({
      apiKey: "API",
      extension: "EXTENSION",
      webrtcSecret: "SECRET",
      config: {
        baseColor: "#333",
      },
    });

    this.innocallsRTC.mount("#InnoCalls_sec");

    setTimeout(() => {
      this.innocallsRTC.startCall('123');
    }, 5000);

  }

}
