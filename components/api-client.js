const URL = `https://almundo.com.co/experts/api/experts/highlights`

function getArtists() {
  return fetch(URL)
    .then(response => response.json())
  .then(artists => artists.map(artist => ({
    name: artist.name + ' ' + artist.last_name,
    image: 'https://www.enjoycompare.com/wp-content/uploads/2014/11/Travel-Logo_v2.png',
    likes: returnSkills(artist, "LANGUAGE"),
    comments: returnSkills(artist, "SOFT_SKILL")
  })))
}

function returnSkills(array, parameter) {
  let count = 0;
  array.skills.map((skill) => { if (skill.type === parameter) {count+=1}})
  return count
}

export { getArtists }