const currentDomain = process.env.NEXT_PUBLIC_WP_DOMAIN;
const apiUrl = `${currentDomain}wp-json/wp/v2`;


export const getMenuInfo = async (endpoint : string) => {
    const response = await fetch(`${apiUrl}/${endpoint}`)
    if(!response.ok) throw new Error('Failed to fetch menu info')
    
    const data = await response.json()
    
    return data
}
