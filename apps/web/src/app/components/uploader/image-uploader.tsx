'use client';

import Image from 'next/image';
import React, { useState, ChangeEvent } from 'react';

interface ImageUploaderProps {
  name: string;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({
  name,
}: ImageUploaderProps) => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImage(null);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Circular Image Preview */}
      <div className="relative w-24 h-24 rounded-full border border-gray-300 flex items-center justify-center bg-gray-100">
        {image ? (
          <Image
            src={image}
            alt="Uploaded"
            className="object-cover w-full h-full rounded-full"
          />
        ) : (
          <div className="text-gray-400">Upload</div>
        )}
      </div>

      {/* Upload or Change Button */}
      <div className="mt-4 flex gap-2">
        {!image ? (
          <>
            <input
              type="file"
              accept="image/*"
              id={`imageUpload-${name}`}
              onChange={handleImageChange}
              className="hidden"
            />
            <label
              htmlFor={`imageUpload-${name}`}
              className="bg-transparent border-2 border-[#0A0D1408] text-[#666666] font-medium py-2 px-4 text-sm rounded-lg cursor-pointer"
            >
              Upload
            </label>
          </>
        ) : (
          <>
            {/* Remove Button */}
            <button
              onClick={removeImage}
              className="bg-transparent border border-[#E94A3F] text-[#E94A3F] font-medium py-1 px-4 rounded-lg"
            >
              Remove
            </button>
            {/* Change Button */}
            <input
              type="file"
              accept="image/*"
              id={`imageUpload-${name}`}
              onChange={handleImageChange}
              className="hidden"
            />
            <label
              htmlFor={`imageUpload-${name}`}
              className="bg-transparent border-2 border-[#0A0D1408] text-[#666666] font-medium py-1 px-4 text-sm rounded-lg cursor-pointer"
            >
              Change
            </label>
          </>
        )}
      </div>
    </div>
  );
};
