import read from './reader'
import json from './parser'

export default class GameSavingLoader {
   async load() {
        try {
         const reader = await read();
         const parser = await json(reader);
         const result = await JSON.parse(parser);
         return result;
        }
        catch {
          console.log('Ошибка');
          return;
        };
   }
 }