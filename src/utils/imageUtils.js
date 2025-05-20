
export const getCloudFlareImageUrl = (imageId) => {
    return `${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/${imageId}/public`;
};

