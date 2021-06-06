export async function getCatData() {
  try {
    // const authKey = process.env.VUE_APP_API_KEY;
    const response = await fetch('https://api.thecatapi.com/v1/breeds/', {
                                  method: 'GET',
                                  headers: {
                                  'x-api-key': authKey
                                  }
                              });
    const json = await response.json();
    return json;
  } catch {
    return [
      {
        "alt_names": "",
        "experimental": 0,
        "hairless": 0,
        "hypoallergenic": 0,
        "id": "abys",
        "life_span": "14 - 15",
        "name": "Abyssinian",
        "natural": 1,
        "origin": "Egypt",
        "rare": 0,
        "reference_image_id": null,
        "rex": 0,
        "short_legs": 0,
        "suppressed_tail": 0,
        "temperament": "Active, Energetic, Independent, Intelligent, Gentle",
        "weight_imperial": "7  -  10",
        "wikipedia_url": "https://en.wikipedia.org/wiki/Abyssinian_(cat)"
      }
    ]
  }
}