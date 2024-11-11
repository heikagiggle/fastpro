export const FileType = {
  VIDEO: 'VIDEO',
  IMAGE: 'IMAGE',
  DOCUMENT: 'DOCUMENT',
  AUDIO: 'AUDIO',
};

export type FileType = (typeof FileType)[keyof typeof FileType];

export const SignedUrlAction = {
  DOWNLOAD: 'DOWNLOAD',
  UPLOAD: 'UPLOAD',
};

export type SignedUrlAction =
  (typeof SignedUrlAction)[keyof typeof SignedUrlAction];
