import { FC, Dispatch, SetStateAction, useState } from 'react';
import Button from 'components/Form/Button';

const PhotoAlbum: FC<{ setNextStep: Dispatch<SetStateAction<number>> }> = ({ setNextStep }) => (
    <>
        <h1>Photo Album</h1>
        <div className="pt-20 w-1/2 text-white">
            <Button
                text="Myphotos"
                color="one"
                onClick={() => {
                    setNextStep(4);
                }}
            />
        </div>
    </>
);
export default PhotoAlbum;
