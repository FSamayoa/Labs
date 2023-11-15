// function FindWordStartingWith(book, query) {
//   // Your code here:
//   const text = book.text.toLowerCase();

//   const separators = {
//     " ": true,
//     ",": true,
//     ".": true,
//     ";": true,
//   };

//   const result = [];

//   for (let i = 0; i < text.length; i++) {
//     if (i !== 0 && !separators[text[i - 1]]) continue;
//     for (let j = 0; j < query.length; j++) {
//       if (query[j] !== text[i + j]) {
//         break;
//       }
//       if (j === query.length - 1) {
//         result.push(i);
//       }
//     }
//   }
//   return result;
// }

// OPCION CHATGPT
function FindWordStartingWith(book, query) {
  const text = book.text.toLowerCase();
  const regex = new RegExp(`\\b${query}\\w*\\b`, "g");
  const result = [];
  let match;

  while ((match = regex.exec(text)) !== null) {
    result.push(match.index);
  }

  return result;
}

const book = {
  id: 1,
  text: "Erase una vez un libro de palabras que era,un poco aburrido pero tenia mucho,aunque algunas palabras locas",
};

console.log(FindWordStartingWith(book, "de")); //([23])
console.log(FindWordStartingWith(book, "un")); //([6, 14, 43])
console.log(FindWordStartingWith(book, "franco")); //([])
console.log(FindWordStartingWith(book, "era")); //([0, 39])

module.exports = FindWordStartingWith;
