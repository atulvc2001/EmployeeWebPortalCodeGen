export async function get(req) {
    const { all } = req.params;
    const url = `https://script.google.com/macros/s/AKfycbwIeh2ubMA7zSg5KQoVU-UREDqkm4v-k0cwh--AnDCd/dev?path=${all.join('/')}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
  
    return {
      body: data,
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }
  