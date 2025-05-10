import type { TypeIcon } from '@/modules/common/components/icon/data';

export type TButtons = {
  icon: TypeIcon;
  label: string;
  action: string;
  url?: string;
};

export const BUTTONS: TButtons[] = [
  {
    icon: 'copy',
    label: 'share.modal.copy',
    action: 'copy',
  },
  {
    icon: 'twitter',
    label: 'share.modal.twitter',
    action: 'twitter',
    url: 'https://twitter.com/intent/tweet?text=DATA_TEXT&url=DATA_URL',
  },
  {
    icon: 'facebook',
    label: 'share.modal.facebook',
    action: 'facebook',
    url: 'https://www.facebook.com/sharer/sharer.php?u=DATA_URL&quote=DATA_TEXT',
  },
  {
    icon: 'linkedin',
    label: 'share.modal.linkedin',
    action: 'linkedin',
    url: 'https://www.linkedin.com/shareArticle?mini=true&url=DATA_URL&title=DATA_TITLE&summary=DATA_TEXT&source=LinkedIn',
  },
];
