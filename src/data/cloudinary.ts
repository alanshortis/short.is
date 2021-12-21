import type { Photo, CloudinaryResponse } from '../types';

export const allPhotos = async (folder: string): Promise<Photo[]> => {
  const folderNameLen = folder.length;

  const data = await fetch(
    `https://api.cloudinary.com/v1_1/alanshortis/resources/image/upload?prefix=${folder}&context=true`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from('172199416163279:M-ZYbcFmIThD59EnYcxlz4V-wig').toString(
          'base64'
        )}`,
      },
    }
  ).then(res => res.json());

  const photos = data.resources.map((photo: CloudinaryResponse) => ({
    id: photo.public_id.slice(folderNameLen + 1),
    url: photo.secure_url,
    camera: photo.context.custom.camera,
    film: photo.context.custom.film,
    lens: photo.context.custom.lens || null,
  }));

  return photos;
};
