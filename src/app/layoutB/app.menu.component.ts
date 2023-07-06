import {Input, OnInit} from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];



  constructor(public layoutService: LayoutService) { }

    ngOnInit() {


        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard User ', icon: 'pi pi-fw pi-id-card', routerLink: ['/addUser'] },

                ]
            },
          {
            label: 'Claims Board',
            items: [
              { label: 'claim', icon: 'pi pi-fw pi-circle', routerLink: ['/claimlist'] }
            ]
          },
            {
                label: 'Delivery Management',
                items: [
                    { label: 'Dashboard ', icon: 'pi pi-fw pi-eye', routerLink: ['/PickupDashboard'], badge: 'NEW' },

                    { label: 'Predict', icon: 'pi pi-fw pi-globe', routerLink: ['/predictCoco'], target: '_blank' }]

             },
            {
                label: 'Front Dashboard',
                items: [
                    { label: 'Order', icon: 'pi pi-fw pi-shopping-cart', routerLink: ['/orders-stats'] },
                    { label: 'Events', icon: 'pi pi-fw pi-bookmark-fill', routerLink: ['/events'] }
                ]
            }
        ];

    }
}
