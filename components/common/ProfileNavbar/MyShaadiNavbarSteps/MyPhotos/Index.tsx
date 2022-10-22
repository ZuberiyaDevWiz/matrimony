import { useState } from 'react';
import UploadFile from 'components/Form/UploadFile';
import Link from 'next/link';
import PhotoAlbum from './PhotoAlbum';
import PhotoSetting from './PhotoSetting';

const MyPhotos = () => {
    const [nextPhoto, setNextPhoto] = useState(1);

    // const photoSteps = () => {
    //     switch (nextPhoto) {
    //         case 1:
    //             return <PhotoAlbum setNextPhoto={setNextPhoto} />;
    //         case 2:
    //             return <PhotoSetting setNextPhoto={setNextPhoto} />;
    //         default:
    //             return <PhotoAlbum setNextPhoto={setNextPhoto} />;
    //     }
    // };

    return (
        <>
            <div className="shadow-2xl bg-gray-300 mx-auto">
                <h1>Upload Photos from your Computer</h1>
                <UploadFile label="Browse Photo" />
            </div>
            <p>Note : You can upload 20 photos to your profile. Each photos must be</p>
            <p>less than 15MB and in jpg, jpeg, png or webp format. All photos</p>
            <p>uploaded are screened as per</p>
            <Link href="/">Photo GuideLines</Link>
            <p>and 98% of those get activated within 2 hours</p>
        </>
    );
};

export default MyPhotos;
