import { FC, Dispatch, SetStateAction, useState } from 'react';
import Button from 'components/Form/Button';

const MyAlbum: FC<{ setNextPhoto: Dispatch<SetStateAction<number>> }> = ({ setNextPhoto }) => (
    <>
        <div className="pt-20 w-1/2 text-white">
            <Button
                text="Myphotos"
                color="one"
                onClick={() => {
                    setNextPhoto(2);
                }}
            />
        </div>
    </>
);
export default MyAlbum;
