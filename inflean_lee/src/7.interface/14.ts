const genre_data:string[] = ['comic' , 'action','romance'];

interface MovieData {
  action  : number;
  comic   : number;
  romance : number;
}

// interface MovieData {
// 	[key: string] : number;
// }

let data : MovieData = {
  'comic'   : 1,
  'action'  : 2,
  'romance' : 3
};

genre_data.forEach(genre => {
  data[`${genre}`] += 1
});

console.log(data);
