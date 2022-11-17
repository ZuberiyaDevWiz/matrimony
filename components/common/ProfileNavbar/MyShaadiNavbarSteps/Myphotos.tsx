import { FC, Dispatch, SetStateAction, useState } from 'react';
import Button from 'components/form/Button';

const MyPhotos: FC<{ setNext: Dispatch<SetStateAction<number>> }> = ({ setNext }) => (
    // const [nextPhoto, setNextPhoto] = useState(1);

    // const MyPhotosSteps = () => {
    //     switch (nextPhoto) {
    //         case 1:
    //             return <MyAlbum setNextPhoto={setNextPhoto} />;
    //         case 2:
    //             return <PhotoSetting setNextPhoto={setNextPhoto} />;
    //         default:
    //             <MyAlbum setNextPhoto={setNextPhoto} />;
    //     }
    // };

    <>
        <h1>hello</h1>
    </>
);
export default MyPhotos;
