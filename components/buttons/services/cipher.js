const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';

export  class  Cipher {
    constructor(key, abc) {
        this.abc = abc;
        this.key = key;
    }

    createSquare() {
        let square = {};
        let row = this.abc;
        square[0] = row;
        for(let i = 0; i <= this.abc.length - 1; i++) {

            if (i > 0) {
                row = row.concat(row[0]).replace(row[0], '');
            }

            square[this.abc[i]] = row;
        }

        return square;
    }
    createKey(word) {
        let updKey = '';
        let index = 0;

        while(updKey.length <= word.length - 1) {
            if (index === this.key.length) {
                index = 0;
            }
            updKey += this.key[index];
            index++;
        }

        return updKey;
    }

    encode(word) {
        let  result = '';
        console.log(word)
        let key = this.createKey(word)
        let sqr = this.createSquare();
        console.log(key);
        for(let i = 0; i <= word.length - 1; i++){
            let char = sqr[0].indexOf(word[i]);
            if (char !== -1) {
                result += sqr[key[i]][char];
            }
            if (char === -1) {
                result += word[i];
            }

        }
        return result;
    }
    decode(word) {
        let  result = '';
        let key = this.createKey(word)
        console.log(key);

        let sqr = this.createSquare();
        for(let i = 0; i <= word.length - 1; i++){

            let char = sqr[key[i]].indexOf(word[i]);

            if (char !== -1) {
                result += sqr[0][char];
            }
            if (char === -1) {
                result += word[i];
            }
        }
        return result;
    }
}