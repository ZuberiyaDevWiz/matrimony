import { FC } from 'react';

interface UploadFileProps {
    label: string;
    fileTypes?: string;
    multiple?: boolean;
}

const UploadFile: FC<UploadFileProps> = ({ label, fileTypes, multiple }) => (
    <div>
        <label className="text-md">{label}</label>
        <input
            type="file"
            accept={fileTypes}
            multiple={multiple}
            className="text-md bg-primary-background w-full border border-gray-600 rounded text-white  "
        />
    </div>
);

export default UploadFile;
