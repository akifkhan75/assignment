import { AppComponent } from '../app.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import  { RouterModule, Routes} from '@angular/router';

const appRouts: Routes = [
	{path: 'dashboard', component: DashboardComponent},
	// {path: 'innerPage', component: InnerPageComponent}
]

export const RoutesConfiguration = RouterModule.forRoot(appRouts);