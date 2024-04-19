import { Configuration } from '../Configuration/configuration';

export class Util {
  public getId() {
    return Number(localStorage.getItem('id'));
  }

  public setId(id: number) {
    localStorage.setItem('id', id.toString());
  }

  public isLoggedIn() {
    if (localStorage.getItem('token') !== null) {
      return true;
    } else {
      return false;
    }
  }

  public getImageLink(image: String) {
    let imgLink = new Configuration().backendUrl + '/storage/' + image;
    return imgLink;
  }
}
