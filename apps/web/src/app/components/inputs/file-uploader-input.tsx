// import { PropsWithChildren, useCallback, useEffect } from 'react';
// import {
//   FieldPathByValue,
//   FieldValues,
//   PathValue,
//   UseFormReturn,
// } from 'react-hook-form';
// import toast from 'react-hot-toast';

// import { ApiResponse, FileData, FileUploadData } from '';

// export function FileUploaderInputs<
//   T extends FieldValues,
//   TD extends FieldPathByValue<T, FileData | undefined>
// >({
//   handler,
//   title,
//   children,
//   showToast = false,
// }: PropsWithChildren<{
//   handler: UseFormReturn<T>;
//   title: TD;
//   showToast?: boolean;
// }>) {
//   const fileData = handler.watch(title) as FileData;

//   const uploadImage = useCallback(
//     async (file: File) => {
//       handler.setValue(title, { file, uploading: true } as PathValue<T, TD>);

//       try {
//         const res = await fetch(
//           `https://api.skillpaddy.com/filemanager/image/?filename=${file.name}`,
//           { method: 'PUT' }
//         );

//         const uploadRes = (await res.json()) as ApiResponse<FileUploadData>;
//         if (!uploadRes.data) return toast.error(uploadRes.message);

//         await fetch(uploadRes.data.uploadUrl, { method: 'PUT', body: file });

//         handler.setValue(title, {
//           file,
//           url: uploadRes.data.file.url,
//         } as PathValue<T, TD>);

//         if (showToast) toast.success('image uploaded');
//       } catch (e) {
//         console.error(`image upload error :: `, e);
//         handler.setValue(title, {} as PathValue<T, TD>);
//         toast.error('image upload error');
//       }
//     },
//     [handler, showToast, title]
//   );

//   useEffect(() => {
//     if (fileData?.file) void uploadImage(fileData.file);
//   }, [fileData?.file, uploadImage]);

//   return children;
// }

export {}