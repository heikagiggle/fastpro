'use client';

import React, { useState, ChangeEvent } from 'react';
import { Button } from '@app/components/lib/ui/button';
import { Input } from '@app/components/lib/ui/input';
import { UploadIcon } from '../icons/file';

interface FileUploaderProps {
  name?: string; 
}

export const FileUploader: React.FC<FileUploaderProps> = ({ name }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  return (
    <div className="relative w-full h-40 border-2 border-[#EAECF0] rounded-lg flex items-center justify-center">
      <Input
        id="file-upload"
        name={name}
        type="file"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        onChange={handleFileUpload}
      />

      <div className="text-center">
        <UploadIcon className="mx-auto h-8 w-8 bg-[#F1E6F8]  rounded-full py-2" />
        <p className="mt-2 text-sm text-gray-500">
          {' '}
          <span className="font-medium">Click to upload</span> or drag and drop
        </p>
        <p className="text-xs">PDF, TXT (max. 5mb)</p>
      </div>

      {file && (
        <Button
          onClick={() => setFile(null)}
          className="absolute top-2 right-2"
        >
          Remove File
        </Button>
      )}
    </div>
  );
};
