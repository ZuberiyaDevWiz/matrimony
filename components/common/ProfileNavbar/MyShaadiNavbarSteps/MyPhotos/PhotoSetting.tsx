import { FC, Dispatch, SetStateAction } from 'react';
import Button from 'components/Form/Button';

const PhotoSetting: FC<{ setNextPhoto: Dispatch<SetStateAction<number>> }> = ({ setNextPhoto }) => (
    <>
        <Button text="next" onClick={() => setNextPhoto(1)} />
    </>
);

export default PhotoSetting;
