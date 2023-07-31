import { Component } from '@angular/core';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.scss']
})
export class HomeworkComponent {
  public add = 'bnt add';
  public reset = 'bnt reset';
  bannedWords: string = '';
  wordToAdd: string = '';
  textToCensor: string = '';

  addWords() {
      this.bannedWords += ' ' + this.wordToAdd;
  }

  resetWords() {
      const wordToRemove = this.wordToAdd.trim();
      this.bannedWords = this.bannedWords.split(' ').filter(word => word !== wordToRemove).join(' ');
      this.wordToAdd = '';
  }

  censorText() {
    let text = this.textToCensor;
    let bannedWordsArr = this.bannedWords.split(' ');

    for (let i = 0; i < bannedWordsArr.length; i++) {
      const word = bannedWordsArr[i];
      const star = '*'.repeat(word.length);
      text = text.replace(new RegExp(word, 'g'), star);
    }

    this.textToCensor = text;
  }
}
