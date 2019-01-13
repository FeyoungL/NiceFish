import { SignInComponent } from './blog/user/sign-in/sign-in.component';
import { RetrievePwdComponent } from './blog/user/retrieve-pwd/retrieve-pwd.component';
import { SignUpComponent } from './blog/user/sign-up/sign-up.component';
import { AuthGuard } from './shared/auth-guard';

export const appRoutes = [
	{
		path: '',
		redirectTo: 'post',
		pathMatch: 'full'
	},
	{
		path: 'home',
		loadChildren: './blog/home/home.module#HomeModule'
	},
	{
		path: 'post',
		loadChildren: './blog/home/home.module#HomeModule'
	},
	{
		path: 'signin',
		component: SignInComponent
	},
	{
		path: 'retrievepwd',
		component: RetrievePwdComponent
	},
	{
		path: 'signup',
		component: SignUpComponent
	},
	{
		path: 'manage',
		loadChildren: './manage/manage.module#ManageModule'
	},
	{
		path: '**',//fallback router must in the last
		loadChildren: './blog/home/home.module#HomeModule'
	}
];
