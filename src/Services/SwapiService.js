export default class SwapiService {
   _api = 'https://swapi.dev/api';

   async getResource(url) {
      const res = await fetch(`${this._api}${url}`);

      if (!res.ok) {
         throw new Error(`Could not fetch ${url}, res status ${res.status}`);
      }

      return await res.json();
   }
   async getAllPeople(id = 1) {
      const res = await this.getResource(`/people/?page=${id}`);
      return res.results;
   }

   async getPersone(id) {
      return await this.getResource(`/people/${id}`);
   }

}