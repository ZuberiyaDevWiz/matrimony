import { FC, Dispatch, SetStateAction, useState } from 'react';
import Button from 'components/Form/Button';
import MyAlbum from './MyAlbum';
import PhotoSetting from './PhotoSetting';

const MyPhotos: FC<{ setNext: Dispatch<SetStateAction<number>> }> = ({ setNext }) => {
    const [nextPhoto, setNextPhoto] = useState(1);

    const MyPhotosSteps = () => {
        switch (nextPhoto) {
            case 1:
                return <MyAlbum setNextPhoto={setNextPhoto} />;
            case 2:
                return <PhotoSetting setNextPhoto={setNextPhoto} />;
            default:
                <MyAlbum setNextPhoto={setNextPhoto} />;
        }
    };

    return (
        <>
            <h1>hello</h1>
        </>
    );
};

export default MyPhotos;
