/**
 * Created by quangdat on 22/08/2017.
 */
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OverlinkComponent } from './overlink/overlink.component';
import { ProjectComponent } from './project/project.component';
import { LoginComponent } from './login/login.component';
const Routing: Routes = [
    {path: '', component: HomeComponent },
    {path: 'employee', component: EmployeeComponent },
    {path: 'employee-detail/:id', component: EmployeeDetailComponent,
        children: [
            {path: 'overlink', component: OverlinkComponent},
            {path: 'project', component: ProjectComponent}
        ]
    },
    {path: 'employee-edit/:id', component: EmployeeEditComponent },
    {path: 'employee-create', component: EmployeeCreateComponent },
    {path: 'login', component: LoginComponent },
    {path: '**', component: NotFoundComponent }
];
export const appRouter = RouterModule.forRoot(Routing);