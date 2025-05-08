import type { ShareData } from '@/modules/share/interfaces/share-data';

export function shareLink(data: ShareData): void {
  navigator
    .share(data)
    .then(() => {
      // TODO: Show alert
    })
    .catch(() => {
      // TODO: Show error message
    });
}

export function shareLinkWithSocialNetwork(
  data: ShareData,
  originalUrl: string,
): void {
  const url: string = Object.keys(data).reduce<string>(
    (acc, key) =>
      acc.replace(
        `DATA_${key.toUpperCase()}`,
        encodeURIComponent(data[key as keyof ShareData]),
      ),
    originalUrl,
  );

  window.open(url, '_blank');
}
