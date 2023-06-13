export type PlaceType = {
  id: number
  name: string
  description: string
  imageId: string
}

export function getImageUrl(place: PlaceType) {
  return 'https://i.imgur.com/' + place.imageId + 'l.jpg'
}
