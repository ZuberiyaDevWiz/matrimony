import { FC } from 'react';

interface UploadFileProps {
    label?: string;
    title?: string;
    fileTypes?: string;
    multiple: boolean;
}

const UploadFile: FC<UploadFileProps> = ({ label, fileTypes, title, multiple }) => (
    <div className="relative my-2  w-full border-[1px] border-gray-300 px-4 rounded-md ">
        <div className="w-full space-y-2 flex justify-between items-center ">
            <span className="font-medium py-4">{title}</span>
            <div className="  items-center  bg-grey-lighter">
                <input multiple={multiple} type="file" accept={fileTypes} />
            </div>
        </div>
    </div>
);

export default UploadFile;
