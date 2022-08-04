// Write your code below
/* Return true if this word is a palindrome. false if it is not. A palindrome is a word that is spelled the same backwards and forwards.

For example:

isPalindrom("a")
// returns true

isPalindrom("noon")
// returns true

isPalindrom("hello")
// returns false
Treat spaces and uppercase letters normally—so “Racecar” wouldn’t be a palindrome since “R” and “r” aren’t the same letter:

isPalindrom("Racecar")
// returns false

isPalindrom("racecar")
// returns true */

function palindromeCheck(word){
    let newWord = word.split('').reverse().join('')
    if (newWord === word){
        return true
    } else {
        return false
    }
}

console.log(palindromeCheck('friend'))

function palindromeCheck2(word){
    for(let i = 0; i < word.length; i++){
        if(word[i] !== word[word.length-1-i]){
        return false
        }else{
            return true
        }
    }
}


 console.log(palindromeCheck2('friend'))



        /*
        for(let j = word.length-1; i < word.length; j--){
            if (word.length % 2 === 0)
                if(word[i] === word[j])
        }
    }
}
*/