export const getImagePath = (imageName: string): string => {
    const relativePath = `../assets/images/${imageName}`;
    return new URL(relativePath, import.meta.url).href;
}
