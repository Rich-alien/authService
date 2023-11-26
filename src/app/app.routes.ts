import {Routes} from '@angular/router';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full',
    },
    {
        path: 'auth',
        loadChildren: () =>
            import('../pages/authorization').then((m) => m.AuthorizationModule),
    },
];