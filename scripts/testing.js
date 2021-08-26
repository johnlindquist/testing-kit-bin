let response = await get(
  `https://api.github.com/users/johnlindquist/repos`
)

console.log(response.data.map(r => r.full_name))
