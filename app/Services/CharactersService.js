import { appState } from "../AppState.js";
import { Character } from "../Models/Character.js";
import { avatarServer, trivaServer } from "./AxiosService.js";

class CharactersService {

  // async getAvatarCharacters() {
  //   // TODO show query params ?perPage=50&page=1
  //   // REVIEW example of issuing get requests
  //   const res = await avatarServer.get('/api/v1/characters', {
  //     params: {
  //       perPage: 100,
  //       page: 2
  //     }
  //   })
  //   //                                  ^^^ url fragment
  //   // console.log('what the heck is the result', res.data);
  //   appState.characters = res.data
  //     .filter(c => !c.name.includes('(') || !c.photoUrl)
  //     .map(rawData => new Character(rawData))
  //   // console.log('appState.characters', appState.characters);
  // }


  async getTrivaQuestions() {
    const triva = await trivaServer.get('/api.php?amount=10&category=15&difficulty=hard&type=boolean', {
      params: {
        perPage: 10,
        page: 1
      }
    })
    appState.characters = triva.data






  }






}

export const charactersService = new CharactersService()