import { enableProdMode } from '@angular/core';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';


enableProdMode();


import { AppServerModule } from './app/app.server.module';


const app = express();

const distFolder = join(process.cwd(), 'dist/your-app-name/browser');
app.use(express.static(distFolder, { index: false }));


app.engine('html', ngExpressEngine({
  bootstrap: AppServerModule,
}));


app.set('view engine', 'html');
app.set('views', distFolder);

app.get('*', (req, res) => {
  res.render('index', { req });
});


const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Servidor Angular Universal en http
