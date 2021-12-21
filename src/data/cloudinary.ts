import type { Photo, CloudinaryResponse } from '../types';

export const allPhotos = async (folder: string): Promise<Photo[]> => {
  const { CLOUDINARY_KEY, CLOUDINARY_NAME, CLOUDINARY_SECRET } = process.env;
  const url = `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/resources/image/upload?prefix=${folder}&context=true`;
  const auth = `Basic ${Buffer.from(`${CLOUDINARY_KEY}:${CLOUDINARY_SECRET}`).toString('base64')}`;

  const data = await fetch(url, {
    headers: {
      Authorization: auth,
    },
  }).then(res => res.json());

  const photos = data.resources.map((photo: CloudinaryResponse) => ({
    id: photo.public_id.slice(folder.length + 1),
    url: photo.secure_url,
    metadata: {
      location: photo.context.custom.location,
      year: photo.context.custom.year,
      camera: photo.context.custom.camera,
      film: photo.context.custom.film,
      lens: photo.context.custom.lens || null,
    },
  }));

  return photos;
};
