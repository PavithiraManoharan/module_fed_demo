import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const APP_ROUTES: Routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    },
    {
      path: 'flights',
      loadChildren: () =>
          loadRemoteModule({
              remoteName: 'mfe1',
              remoteEntry: 'http://localhost:3030/remoteEntry.js',
              exposedModule: './Module'
          })
          .then(m => m.AboutModule)
    },
    {
      path: '**',
      component: NotFoundComponent
    }

];