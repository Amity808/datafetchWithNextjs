

export default async function GetAllUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    if (!response.ok) throw new Error('Faled To Fetch Data')
    
  return response.json()

}
