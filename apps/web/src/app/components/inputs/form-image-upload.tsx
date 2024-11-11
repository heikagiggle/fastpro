// 'use client';

// import Image from 'next/image';
// import { ChangeEvent, ReactNode, useEffect, useState } from 'react';
// import { FieldValues, Path, PathValue } from 'react-hook-form';
// import toast from 'react-hot-toast';

// import { cn } from '../../utils/helpers/cn';
// import { ApiResponse, FileUploadData } from '../../utils/types';
// import { LoadingSpinner } from '../widgets/loading-spinner';
// import { FormInputProps } from './types';

// export function FormImageUpload<T extends FieldValues, TD extends Path<T>>({
//   title,
//   handler,
//   error,
//   className,
// }: FormInputProps<T, TD>) {
//   const [loading, setLoading] = useState(false);
//   const [file, setFile] = useState<File>();

//   const imageUrl: string = handler.watch(title);

//   const handleFileSelected = (event: ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (!file) return;

//     setFile(file);
//   };

//   useEffect(() => {
//     if (!file) return;

//     const uploadImage = async () => {
//       try {
//         setLoading(true);
//         const res = await fetch(
//           `https://api.skillpaddy.com/filemanager/image/?filename=${file.name}`,
//           { method: 'PUT' }
//         );

//         const uploadRes = (await res.json()) as ApiResponse<FileUploadData>;
//         if (!uploadRes.data) return toast.error(uploadRes.message);

//         await fetch(uploadRes.data.uploadUrl, { method: 'PUT', body: file });
//         handler.setValue(
//           title,
//           uploadRes.data.file.url as PathValue<T, typeof title>
//         );

//         toast.success('image uploaded');
//       } catch (e) {
//         console.error(`image upload error :: `, e);
//       } finally {
//         setLoading(false);
//       }
//     };

//     void uploadImage();
//   }, [file, handler, title]);

//   return (
//     <label className={cn(`flex w-full relative flex-col gap-6`, className)}>
//       {loading && (
//         <div
//           className={
//             'absolute top-0 left-0 w-full h-full flex items-center justify-center z-50 backdrop-blur-sm'
//           }
//         >
//           <LoadingSpinner />
//         </div>
//       )}
//       {imageUrl ? (
//         <div
//           className={'flex flex-col w-full gap-2 items-center justify-start'}
//         >
//           <div className={'w-full aspect-square'}>
//             <Image
//               src={imageUrl}
//               fill={true}
//               alt={'file-uploaded'}
//               className={'object-contain'}
//             />
//           </div>

//           <p
//             className={
//               'text-sm font-medium text-center cursor-pointer hover:underline hover:text-[#006BFF]'
//             }
//           >
//             Change Image
//           </p>
//         </div>
//       ) : (
//         <div
//           className={
//             'flex flex-col gap-4 items-center py-12 px-4 w-full justify-center text-sm border-dashed border rounded-lg border-[#FE0E7833] text-center cursor-pointer'
//           }
//         >
//           <p className="font-medium text-sm">
//             Drop you thumbnail here OR{' '}
//             <span className="text-[#006BFF]">Browse</span>
//           </p>

//           <p className="text-[#eee]">Image size less then 5 mb</p>
//         </div>
//       )}
//       <input
//         type="file"
//         accept=".png, .jpg, .jpeg"
//         className="hidden"
//         onChange={handleFileSelected}
//       />

//       {(error || handler.formState.errors[title]?.message) && (
//         <small className={'text-red-500 px-4 mt-2 duration-100 ease-in'}>
//           {error ?? (handler.formState.errors[title]?.message as ReactNode)}
//         </small>
//       )}
//     </label>
//   );
// }
export {}