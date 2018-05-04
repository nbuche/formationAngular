import {Component, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  batmanMovie = {
    poster : 'http://t1.gstatic.com/images?q=tbn:ANd9GcRIiLwO4ZCIQ4iLf-vwMlU_pBoGL92RS-QNJxg5hA-dUQCAVxdg',
    title:'The Dark Knight Rises',
    directors:['Christopher Nolan'],
    actors:['Christian Bale', 'Tom Hardy', 'Anne Hathaway', 'Joseph Gordon‑Levitt', 'Marion Cotillard'],
    genres:['Thriller', 'Action'],
    synopsis: 'Il y a huit ans, Batman a disparu dans la nuit : lui qui était un héros est alors devenu un fugitif. S\'accusant de la mort du procureur-adjoint Harvey Dent, le Chevalier Noir a tout sacrifié au nom de ce que le commissaire Gordon et lui-même considéraient être une noble cause. Et leurs actions conjointes se sont avérées efficaces pour un temps puisque la criminalité a été éradiquée à Gotham City grâce à l\'arsenal de lois répressif initié par Dent.\n' +
    '            Mais c\'est un chat – aux intentions obscures – aussi rusé que voleur qui va tout bouleverser. À moins que ce ne soit l\'arrivée à Gotham de Bane, terroriste masqué, qui compte bien arracher Bruce à l\'exil qu\'il s\'est imposé. Pourtant, même si ce dernier est prêt à endosser de nouveau la cape et le casque du Chevalier Noir, Batman n\'est peut-être plus de taille à affronter Bane…'
  }
}
