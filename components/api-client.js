const URL = `https://almundo.com.co/experts/api/experts/highlights`
const IMG = ['https://www.enjoycompare.com/wp-content/uploads/2014/11/Travel-Logo_v2.png',
  'https://i.pinimg.com/originals/51/f2/18/51f218b857cc754dcf87df41acea01ad.jpg',
  'https://ewtcdn-dt7ryijmgirh.netdna-ssl.com/wp-content/uploads/2017/05/polar-pro-dronetrekker.jpg',
  'https://img2.10bestmedia.com/Images/Photos/333069/10_57_300x300.jpg',
  'https://i1.wp.com/www.globaladventuress.com/wp-content/uploads/2016/06/patagonia-1.jpg?resize=300%2C300'
];

function getExperts() {
  return fetch(URL)
    .then(response => response.json())
  .then(experts => experts.map(expert => ({
    name: expert.name + ' ' + expert.last_name,
    image: IMG[Math.floor((Math.random() * 4))],
    likes: returnSkills(expert, "LANGUAGE"),
    comments: returnSkills(expert, "SOFT_SKILL")
  })))
}

function returnSkills(array, parameter) {
  let count = 0;
  array.skills.map((skill) => { if (skill.type === parameter) {count+=1}})
  return count
}

export { getExperts }