import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { User } from 'Models/User';
import { ServiceAdminService } from '../service-admin.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {Table} from "primeng/table";
import {UsersRole} from "../../../Models/UsersRole";
import {Subscription} from "rxjs";
import {LayoutService} from "../layoutB/service/app.layout.service";
import {Role} from "../../../Models/Role";



@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit, OnDestroy {

  PDF_urlStatUser:string="http://localhost:8081/user/PDF_StatStore";
  constructor(public layoutService: LayoutService,private Service: ServiceAdminService, private http: HttpClient, private r: ActivatedRoute, private route: Router) {
    this.subscription = this.layoutService.configUpdate$.subscribe(config => {
      this.initCharts();
    });
  }

  breadcrumbItems=[
    {'label':'HOME'},
    {'label':'USERS'},
    {'label':'DASHBOARD'},
  ]

  cols: any[] = [];
  barData: any;
  roles:Role[]=[];
  role:number=1;

  ngOnInit(): void {
    this.Service.getAllRoles().subscribe(data=>{this.roles=data

    this.Service.UsersByRole().subscribe(data=>{this.UserRole=data;
      this.initCharts();

    this.Service.getUsers().subscribe(data => {
      this.users = data;


       this.selectedFile1=null;

    });
    });
    });
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }


  selectedUsers: User[] = [];
  form: any = {}
  ROLE = "ADMINISTRATOR";
  error: string = '';

  user: User = new User();


  selectedFile1!: File | null | undefined;

  onUploadImage1() {
    if(this.selectedFile1!=null)
    this.Service.upload(this.selectedFile1).subscribe(
      response => {
        console.log(response);
      }
    );
  }

;



  updateUser() {

    // @ts-ignore
    this.Service.adduser(this.user,this.user.role.id).subscribe(() => {
    })
  }

  handleFileInput1(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.selectedFile1 = inputElement.files?.item(0);
  }





  users: User[] = []

  saveUser(t7: NgForm) {
    if(this.selectedFile1!=null)
    {
    this.onUploadImage1();
        // @ts-ignore
    this.user.image = this.selectedFile1.name;
    }

    this.Service.adduser(this.user, this.role).subscribe(() => {
    });
  }


  deleteUser(id: number) {
    this.Service.deleteUser(id).subscribe({})
    this.Service.getUsers();
    this.refresh();
  }


  productDialog: boolean = false;
  productDialogAdd: boolean = false;
  NewUser: User = new User();

  editUser(user: User) {
    this.user = {...user};

    this.NewUser = this.user;
    this.productDialog = true;
  }

  AddUser() {
    this.user = new User();
    this.productDialogAdd = true;
  }

  refresh() {
    const currentUrl = window.location.href;
    // @ts-ignore
    window.history.replaceState(null, null, currentUrl);
    window.location.reload();
  }

  @Input() options: any;
  pieData: any;

  polarData: any;

  barOptions: any;

  UserRole: UsersRole[] = [];

  INSCRIT:number=0;

  ADMINISTRTOR:number=0;
  ACHETEUR:number=0;
  VENDEUR:number=0;

  initCharts() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.barData = {
      labels: this.UserRole.map(items => items.role),
      datasets: [
        {
          label: 'Number of Users',
          backgroundColor: documentStyle.getPropertyValue('--secondary-500'),
          borderColor: documentStyle.getPropertyValue('--secondary-500'),
          data: this.UserRole.map(items => items.nb)
        }
      ]
    };

    this.barOptions = {
      plugins: {
        legend: {
          labels: {
            fontColor: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 100
            }
          },
          grid: {
            display: false,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
      }
    };
    for(let i=0;i<this.barData.labels.length;i++)
    {
      if(this.barData.labels[i]=="INSCRIT")
        this.INSCRIT=this.barData.datasets[0].data[i];
      if(this.barData.labels[i]=="ADMINISTRTOR")
        this.ADMINISTRTOR=this.barData.datasets[0].data[i];
      if(this.barData.labels[i]=="ACHETEUR")
        this.ACHETEUR=this.barData.datasets[0].data[i];
      if(this.barData.labels[i]=="VENDEUR")
        this.VENDEUR=this.barData.datasets[0].data[i];
    }
  }




  subscription: Subscription;

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}


